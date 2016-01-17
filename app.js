var exec = require('child_process').exec;
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/webhook', function(req, res) {
    console.log(req.headers);
    console.log(123);
    exec('git pull origin dev');
    res.send('webhook');
});

app.listen(process.env.PORT, function() {
    console.log('runing');
})
