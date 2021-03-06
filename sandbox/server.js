const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  function sendData(err, data) {
    res.end(data);
  }

  if (req.url === '/datepicker.js') {
    res.writeHead(200, {'Content-Type': 'application/javascript; charset=UTF-8'});
    fs.readFile(path.resolve(__dirname, '../datepicker.js'), 'utf-8', sendData);

  } else if (req.url === '/styles.css') {
    res.writeHead(200, {'Content-Type': 'text/css; charset=UTF-8'});
    fs.readFile(path.resolve(__dirname, 'styles.css'), 'utf-8', sendData);

  } else if (req.url === '/datepicker.css') {
    res.writeHead(200, {'Content-Type': 'text/css; charset=UTF-8'});
    fs.readFile(path.resolve(__dirname, '../datepicker.css'), 'utf-8', sendData);

  } else {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    fs.readFile(path.resolve(__dirname, 'sandbox.html'), 'utf-8', sendData);
  }
}).listen(9001, () => console.log('Listening on 9001...'));
