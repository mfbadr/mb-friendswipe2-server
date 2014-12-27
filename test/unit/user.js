/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    User       = require('../../server/models/user'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('User', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a User object', function(done){
      var user = new User({name:'bob', id:'123'});

      expect(user).to.be.instanceof(User);
      expect(user.name).to.equal('bob');
      done();
    });
  });

  describe('.register', function(){
    it('should register a new User', function(done){
      User.register({name:'sam', id:'123'}, function(err, results){
        //console.log(err, results);
        expect(err).to.be.null;
        done();
      });
    });
  });
});
