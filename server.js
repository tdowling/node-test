// var http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);


var express = require('express');
var scraper = require('./lib/scrape.js');
var app = express();

app.get('/', function(req, res){
    res.send("<a href='mailto:tavis@tav.is'>tavis@tav.is</a>");
});

app.get('/scrape', function(req, res){
    go(req,res);
});


go = function(req,res) {
    var stuff = '';

    stuff = scraper.test;
    res.send(stuff);
}

foo = function(req, res){
    $ = cheerio.load('<html><head></head><body><div id="content"><div id="sidebar"></div><div id="main"><div id="breadcrumbs"></div><table id="data"><tr><th>Name</th><th>Address</th></tr><tr><td class="name">John</td><td class="address">Address of John</td></tr><tr><td class="name">Susan</td><td class="address">Address of Susan</td></tr></table></div></div></body></html>');
    $('#data .name').each(function() {
	res.send($(this).text());
    });

}

app.listen(3001);
