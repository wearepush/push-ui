/* eslint-disable */
var express = require("express");
var serveStatic = require("serve-static");

var app = express();
app.use(serveStatic(__dirname + "/storybook-static"));

var port = process.env.PORT || 8080;
app.listen(port);
