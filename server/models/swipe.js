'use strict';

var pg = require('../postgres/manager');

function Swipe(obj){
  this.sender = obj.sender;
  this.target = obj.target;
  this.liked = obj.liked;
}

Swipe.new = function(obj, cb){
  var user = new Swipe(obj);

  pg.query('insert into users (name, id) values ($1, $2) returning id, name', [user.name, user.id], function(err, results){
    cb(err, results);
  });
};

module.exports = Swipe;
