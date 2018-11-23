var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()


app.set('trust proxy', 1)

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes)

app.listen(4003, function () {
    console.log('server is running......')
})