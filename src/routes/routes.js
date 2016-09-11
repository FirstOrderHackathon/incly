var Post = require('../models/Post.js');
var User = require('../models/User.js');
var path = require('path');

module.exports = function(app, connection, passport) {
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

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.json(req.user);
  })

  app.post('/add', function(req, res) {
    var post = {
      content: req.body.content
    }

    connection.collection('posts').insert(post);
    res.json(post)
  })

  app.post('/upload', function(req, res) {
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename) {

      fstream = fs.createWriteStream('../uploads/' + filename);
      file.pipe(fstream);
      fstream.on('close', function () {
          res.send('success');
      });
    })
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

  app.post('/signup', function(req, res) {
    User.findOne({username: req.body.username}, function(err, doc) {
      console.log(doc);
      if (doc == null) {
        var user = {
          username: req.body.username,
          password: req.body.password
        };
        connection.collection('users').insert({
          username: req.body.username,
          password: req.body.password
        });
        res.json(user);
      }
      else {
        res.send('Username taken');
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
