// var http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);


var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello Node');
});

app.listen(3000);
