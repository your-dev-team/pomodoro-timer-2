const http = require('http');
const fs = require('fs');
const path = require('path');

function createServer() {
  const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './index.html';
    }
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = 'text/html';
    let mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css'
    };
    contentType = mimeTypes[extname] || 'application/octet-stream';
    fs.readFile(filePath, function(error, content) {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    });
  }).listen(8080, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8080/')
  });
}

createServer();
