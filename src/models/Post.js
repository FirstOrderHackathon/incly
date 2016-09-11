var mongoose = require('mongoose');

var postSchema = mongoose.Schema  ({
  content: String,
  voteCount: Number,
  
}, { collection: 'posts' } );

module.exports = mongoose.model('Post', postSchema);
