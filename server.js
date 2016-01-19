var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/bower_components'));

app.use(express.static(__dirname + '/'));

app.listen(5000);
console.log("Server running on port 5000");
