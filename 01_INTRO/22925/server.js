//const http = require('http');
//const fs = require('fs'); // módulo para leer archivos
//const path = require('path');

const server = http.createServer((req, res) => {
  // Obtenemos la ruta del archivo HTML
  const filePath = path.join(__dirname, 'index.html');

  // Leemos el archivo
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error al cargar el archivo');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // ahora enviamos HTML
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
