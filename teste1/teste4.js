var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
if (req.url == '/dados') {
var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
res.write(" Email digitado: "+ fields.email);
res.write(" Senha digitada: " + fields.senha);
res.write(" Profissao escolhida: "+ fields.profissao);
res.end();
});
} else {
    fs.readFile('formulario.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
    }
    }).listen(80);