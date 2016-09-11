var mongoose = require('mongoose');

var imageSchema = mongoose.Schema ({
  user: String,

  imageUrl: String
}, { collection : 'images' });

module.exports = mongoose.model('Image', imageSchema);
