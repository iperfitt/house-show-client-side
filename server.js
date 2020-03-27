// create an express application
var express = require('express');
const app = express();
var path = require('path');
// Run the app by serving the static files
// in the dist directory
 app.use(express.static(__dirname + '/src/app/dist'));
//app.use(express.static(${__dirname}/dist/'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
// app.get('/*', function(req, res) {
//   res.sendFile('src/app/dist/index.html', { root: __dirname } );
// });
// app.get('*', (req, res) => {
//   res.sendFile(`./dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
// });
