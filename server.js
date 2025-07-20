
const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Função para encontrar a pasta mais recente
function getLatestFolder() {
  const directories = fs.readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => dirent.name.startsWith('Challenge'))
    .map(dirent => {
      const fullPath = path.join(__dirname, dirent.name);
      const stats = fs.statSync(fullPath);
      return {
        name: dirent.name,
        path: fullPath,
        created: stats.birthtime
      };
    })
    .sort((a, b) => b.created - a.created);
  
  return directories.length > 0 ? directories[0].name : 'Challenge 02 - Blog Preview Card';
}

let currentFolder = getLatestFolder();
console.log(`Servindo a pasta: ${currentFolder}`);

// Servir arquivos estáticos da pasta mais recente
app.use(express.static(path.join(__dirname, currentFolder)));

// Criar servidor WebSocket para live reload
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
  console.log(`Monitorando pasta: ${currentFolder}`);
});

const wss = new WebSocket.Server({ server });

// Monitorar mudanças nos arquivos da pasta atual
let watcher = chokidar.watch(`${currentFolder}/**/*`, {
  ignored: /node_modules/,
  persistent: true
});

// Monitorar criação de novas pastas Challenge
const rootWatcher = chokidar.watch('./', {
  ignored: /node_modules/,
  persistent: true,
  depth: 1
});

rootWatcher.on('addDir', (dirPath) => {
  const folderName = path.basename(dirPath);
  if (folderName.startsWith('Challenge') && folderName !== currentFolder) {
    console.log(`Nova pasta detectada: ${folderName}`);
    
    // Atualizar pasta atual
    currentFolder = folderName;
    
    // Parar o watcher anterior
    watcher.close();
    
    // Criar novo watcher para a nova pasta
    watcher = chokidar.watch(`${currentFolder}/**/*`, {
      ignored: /node_modules/,
      persistent: true
    });
    
    // Reconfigurar eventos do novo watcher
    watcher.on('change', () => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send('reload');
        }
      });
    });
    
    console.log(`Agora servindo: ${currentFolder}`);
    
    // Notificar clientes para recarregar
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('reload');
      }
    });
  }
});

watcher.on('change', () => {
  // Enviar sinal de reload para todos os clientes conectados
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('reload');
    }
  });
});

// Script de live reload para injetar no HTML
const liveReloadScript = `
<script>
  const ws = new WebSocket('ws://localhost:${PORT}');
  ws.onmessage = function(event) {
    if (event.data === 'reload') {
      location.reload();
    }
  };
</script>
`;

// Interceptar arquivos HTML para injetar o script de live reload
app.get('*.html', (req, res, next) => {
  const filePath = path.join(__dirname, currentFolder, req.path);
  
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');
    html = html.replace('</body>', liveReloadScript + '</body>');
    res.send(html);
  } else {
    next();
  }
});

// Middleware para servir arquivos estáticos atualizados
app.use((req, res, next) => {
  const staticPath = path.join(__dirname, currentFolder);
  express.static(staticPath)(req, res, next);
});
