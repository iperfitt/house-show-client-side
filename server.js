// server.js
import express from 'express';
const app = express();
import join from 'path';
// Run the app by serving the static files
// in the dist directory
app.use(static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(join(__dirname + '/dist/index.html'));
});

// // server.js
// var express = require('express');
// const app = express();
// var path = require('path');
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);
// // ...
// // For all GET requests, send back index.html
// // so that PathLocationStrategy can be used
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });