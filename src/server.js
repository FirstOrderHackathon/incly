var express = require('express');
var busboy = require('connect-busboy');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var mongoose = require('mongoose');
var routes = require('./routes/routes.js');
var dbInfo = require('./dbInfo.js');
var passport = require('passport');
var passportStrategy = require('./passport/passport.js');
var path = require('path');
var db = require('./dbInfo.js');
var mLabPath = db.url;
var port = process.env.PORT || 8080;

mongoose.connect(mLabPath);
var connection = mongoose.connection;

var app = express();

app.use(express.static('../public'))
.use(bodyParser())
.use(morgan('dev'))
.use(passport.initialize())
.use(busboy());

passportStrategy(passport);
routes(app, connection, passport);

app.listen(port, function() {
  console.log('Server running on port', port)
});
