// var http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);


var express = require('express');
var shareworks = require('./lib/shareworks.js');
var scraper = require('./lib/scrape.js');
var app = express();

app.get('/', function(req, res){
    res.send("<a href='mailto:tavis@tav.is'>tavis@tav.is</a>");
});

app.get('/scrape', function(req, res){
    shareworks.do_request(function(val){
        res.send(val);
    })
});

app.listen(3001);
