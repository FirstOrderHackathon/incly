var mongoose = require('mongoose');

var imageSchema = mongoose.Schema ({
  imageUrl: String
})

module.exports = mongoose.model('Image', imageSchema);
