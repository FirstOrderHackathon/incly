var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
var dbInfo = require('./dbInfo.js');

var port = process.env.PORT || 8080;

console.log(dbInfo.url)
mongoose.connect(dbInfo.url);
var connection = mongoose.connection;

var app = express();

app.use(express.static('public'))
.use(bodyParser())
.use(morgan('dev'))

routes(app, connection)

app.listen(port, function() {
  console.log('Server running on port', port)
});
