var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/webhook', function(req, res) {
    console.log(req);
    res.send('webhook');
});

app.listen(process.env.PORT, function() {
    console.log('runing');
})
