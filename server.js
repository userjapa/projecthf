var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    methodOverride = require('method-override');

var db = require('./config/db');

var port = process.env.PORT || 3000; 

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log('Running at localhost:' + port);

exports = module.exports = app;