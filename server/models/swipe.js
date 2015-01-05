/* jshint camelcase:false */

'use strict';

var pg = require('../postgres/manager'),
    _  = require('underscore');

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

Swipe.query = function(userId, cb){
  var userSwipes, userTargets, userMatches = [];

  pg.query('select sender as sender_id, time, liked, u.name as sender_name from swipes inner join users u on u.id = swipes.sender where target = $1 and liked = true order by time', [userId], function(err, results){
    if(err){cb(err);}
    userTargets = results.rows;
    pg.query('select target as target_id, time, liked, u.name as target_name from swipes inner join users u on u.id = swipes.target where sender = $1 and liked = true order by time', [userId], function(err, results){
      if(err){cb(err);}
      userSwipes = results.rows;

      userSwipes.forEach(function(userSwipe){

        var tempArray = _.where(userTargets, {sender_id: userSwipe.target_id});

        tempArray.forEach(function(swipe){
          userMatches.push(swipe);
        });

      });

      cb(err, userMatches);

    });
  });
};

module.exports = Swipe;
