
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

// Criar servidor HTTP
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
  console.log(`Monitorando pasta: ${currentFolder}`);
});

// Criar servidor WebSocket
const wss = new WebSocket.Server({ server });

// Script de live reload para injetar no HTML
const liveReloadScript = `
<script>
  const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
  const ws = new WebSocket(protocol + window.location.host);
  ws.onmessage = function(event) {
    if (event.data === 'reload') {
      location.reload();
    }
  };
  ws.onopen = function() {
    console.log('Live reload conectado');
  };
  ws.onerror = function(error) {
    console.log('Erro no live reload:', error);
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

// Interceptar a rota raiz para servir index.html
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, currentFolder, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    html = html.replace('</body>', liveReloadScript + '</body>');
    res.send(html);
  } else {
    res.status(404).send('index.html não encontrado na pasta: ' + currentFolder);
  }
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, currentFolder)));

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

// Função para configurar eventos do watcher
function setupWatcherEvents(watcher) {
  watcher.on('change', () => {
    console.log('Arquivo alterado, recarregando...');
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('reload');
      }
    });
  });
}

// Configurar eventos do watcher inicial
setupWatcherEvents(watcher);

// Monitorar criação de novas pastas
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
    
    // Configurar eventos do novo watcher
    setupWatcherEvents(watcher);
    
    console.log(`Agora servindo: ${currentFolder}`);
    
    // Notificar clientes para recarregar
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('reload');
      }
    });
  }
});

// Log de conexões WebSocket
wss.on('connection', (ws) => {
  console.log('Cliente conectado ao live reload');
  
  ws.on('close', () => {
    console.log('Cliente desconectado do live reload');
  });
});
