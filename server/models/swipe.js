'use strict';

var pg = require('../postgres/manager');

function Swipe(obj){
  this.sender = obj.sender;
  this.target = obj.target;
  this.liked = obj.liked;
}

Swipe.new = function(obj, cb){
  var swipe = new Swipe(obj);

  pg.query('insert into swipes (sender, target, liked ) values ($1, $2, $3) returning id, sender, target, liked', [swipe.sender, swipe.target, swipe.liked], function(err, results){
    cb(err, results);
  });
};

module.exports = Swipe;
