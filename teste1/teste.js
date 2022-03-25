var http = require('http');
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Hello World\n');
response.end();
}).listen(1337, "127.0.0.1"); //80
console.log('Servidor executando em http://127.0.0.1:1337/');