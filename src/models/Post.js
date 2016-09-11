var mongoose = require('mongoose');

var postSchema = mongoose.Schema  ({
  user: String,
  report: String,
  voteCount: Number,
  imageUrl: String

}, { collection: 'posts' } );

module.exports = mongoose.model('Post', postSchema);
