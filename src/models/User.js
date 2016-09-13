var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  information: [Object]
}, { collection: 'users'} );

module.exports = mongoose.model('User', userSchema);
