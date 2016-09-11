var mongoose = require('mongoose');

var postSchema = mongoose.Schema  ({
  user: String,
  content: String,
  voteCount: Number,
  imageUrl: String,
  imageName: String

}, { collection: 'posts' } );

module.exports = mongoose.model('Post', postSchema);
