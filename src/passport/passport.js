var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/User.js');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    })
  })

  passport.use('local', new LocalStrategy({
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({username: username, password: password}, function(err, user) {
        console.log('Checking for user');
        if (err) {
          console.log('Error searching for user')
          return done(err)
        }
        else if (!user) {
          console.log('Could not find user')
          return done(null, false, { message: 'Incorrect username'})
        }
        console.log('User found')
        return done(null, user)
      })
    }
  ));

}
