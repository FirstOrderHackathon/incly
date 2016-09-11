var Post = require('../models/Post.js');
var User = require('../models/User.js');
var path = require('path');
var fs = require('fs');

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

  app.get('/userHistory/:user', function(req, res) {
    Post.find({username: req.params.user}, function(err, data) {
      if (err) {
        console.log(err)
      }
      else if (data) {
        res.send(data);
      }
    })
  })

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.json(req.user);
  })

  app.post('/add', function(req, res) {
    var report = {
      // user: req.user.username
    }

    req.pipe(req.busboy);

    req.busboy.on('field', function(fieldname, val) {
      report.report = val;
    });

    req.busboy.on('file', function(fieldname, file, filename) {

      var location = '../../src/uploads/routes/uploads/' + filename;
      var fstream = fs.createWriteStream(__dirname + '/uploads/' + filename);
      report.imageUrl = location;

      file.pipe(fstream);
      fstream.on('close', function () {
          res.json(report);
      });
    })

    req.busboy.on('finish', function() {
      connection.collection('posts').insert(report)
      res.json(report);
    })
  })

  app.post('/edit/:post', function(req, res) {
    Post.findById(req.params.post, function(err, post) {
      if (err) {
        console.log(err)
      }
      else if (post) {
        if (post.contentUpdate) {
          post.report = req.body.update;
        }
        else if (post.deleteImage) {
          post.imageUrl = undefined;
        }
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
