var mongoose = require('mongoose');
var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');

module.exports = function(app){
  app.get('/oldpage', function(req, res){
    users.index(req, res);
  });

  app.get('/users', function(req, res) {
      users.index(req, res);
  })

  app.post('/users', function(req, res){
    users.new(req, res);
  })

  app.post('/messages/:_id', function(req, res){
    messages.new(req, res);
  })
};
