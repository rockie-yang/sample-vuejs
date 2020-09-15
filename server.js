var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.BACKEND_PORT || process.env.PORT || 3000;
var hostname = '127.0.0.1';

app.listen(port);
console.log("App listening on port " + port + " for static files in " + __dirname + "/dist");