'use strict';

var pg = require('../postgres/manager');

function User(obj){
  this.name = obj.name;
  this.id = obj.id;
}

User.register = function(obj, cb){
  var user = new User(obj);

  pg.query('insert into users (name, id) values ($1, $2) returning id', [user.name, user.id], function(err, results){
    cb(err, results);
  });
};

module.exports = User;
