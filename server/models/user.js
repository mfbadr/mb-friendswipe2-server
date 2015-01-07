/* jshint camelcase:false */
'use strict';

var pg = require('../postgres/manager'),
    _  = require('underscore');

function User(obj){
  this.name = obj.name;
  this.id = obj.id;
}

User.register = function(obj, cb){
  var user = new User(obj);

  pg.query('insert into users (name, id) values ($1, $2) returning id, name', [user.name, user.id], function(err, results){
    cb(err, results);
  });
};

User.matches = function(userId, cb){
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

module.exports = User;
