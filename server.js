
const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const WebSocket = require('ws');

const app = express();
const PORT = 5000;

// Servir arquivos estáticos da pasta Challenge 02
app.use(express.static(path.join(__dirname, 'Challenge 02 - Blog Preview Card')));

// Criar servidor WebSocket para live reload
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});

const wss = new WebSocket.Server({ server });

// Monitorar mudanças nos arquivos
const watcher = chokidar.watch('Challenge 02 - Blog Preview Card/**/*', {
  ignored: /node_modules/,
  persistent: true
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
  const filePath = path.join(__dirname, 'Challenge 02 - Blog Preview Card', req.path);
  
  if (require('fs').existsSync(filePath)) {
    let html = require('fs').readFileSync(filePath, 'utf8');
    html = html.replace('</body>', liveReloadScript + '</body>');
    res.send(html);
  } else {
    next();
  }
});
