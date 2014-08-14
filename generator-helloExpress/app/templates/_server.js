'use strict';

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Listening on port: ' + app.get('port'));
});

