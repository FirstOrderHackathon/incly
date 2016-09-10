'use strict';
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var parser = require('body-parser');
var passportFB = require('passport-facebook');
var password = process.env.secret || 'keyboardWarriors';
var portReplace = process.env.PORT || 3000;
// ROUTER EXAMPLE
// var userRouter = require('./api/user');
// require('./config/passport.js')(passport);
// DATABASE SETUP
// require('./database.js');
app.use('/', express.static('public'));
app.use(cookieParser(password));
app.use(parser.json());
app.use(flash());
app.use(expressSession({
  secret: password,
  resave: false,
  saveUninitialized: true,
  cookie: { expires: false }
 }));
 // PASSPORT SETUP
app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/',
        successFlash: 'Welcome!'
    }));
// app.use('/api', userRouter);
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
app.listen(portReplace, function() {
  console.log("Express Server is Running on Port " + portReplace)
});
