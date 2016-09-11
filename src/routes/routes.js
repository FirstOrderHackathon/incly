var Post = require('../models/Post.js');

module.exports = function(app, connection) {
  app.get('/', function(req, res) {
    res.send('index.html')
  })

  app.get('/posts', function(req, res) {
    Post.find(function(err, posts) {
      if (err) {
        console.log(err)
      }
      else if (posts) {
        res.json(posts)
      }
    });
  })

  app.get('/post/:id', function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err) {
        console.log(err)
      }
      else if (post) {
        res.json(post)
      }
    });
  })

  app.post('/add', function(req, res) {
    var post = {
      content: req.body.content
    }

    connection.collection('posts').insert(post);
    res.json(post)
  })

  app.post('/edit/:post', function(req, res) {
    Post.findById(req.params.post, function(err, post) {
      if (err) {
        console.log(err)
      }
      else if (post) {
        post.content = req.body.update;
        post.save(function (err, updatedPost) {
          if (err) {
            console.log(err)
          }
          res.json(updatedPost);
        })
      }
    })
  })

  app.delete('/delete/:post', function(req, res) {
    Post.findById(req.params.post, function(err, post) {
      if (err) {
        console.log(err)
      }
      else if (post) {
        post.remove()
      }
      res.send(post)
    })
  })
}
