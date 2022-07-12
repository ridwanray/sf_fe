var express = require('express');
var serveStatic = require('serve-static');
const path = require('path')
var app = express();
app.use('/', serveStatic(path.join(__dirname + "/dist")));
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

let port = process.env.PORT || 8080;
app.listen(port);

