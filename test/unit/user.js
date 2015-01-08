/* jshint expr:true, camelcase:false */

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
    db         = h.getDb();

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
        expect(err).to.be.null;
        expect(results.rows[0].id).to.equal('123');
        expect(results.rows[0].name).to.equal('sam');
        done();
      });
    });
    it('should fail to insert an existing User', function(done){
      User.register({name:'edward', id:'1'}, function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.matches', function(){
    it('should should return an array of facebook ids, names, and match times', function(done){
      var userId = 1;
      User.matches(userId, function(err, results){
        console.log('userMatches FROM UNIT', results);

        expect(results[0].liked).to.be.ok;
        expect(results[0].sender_name).to.equal('bob');
        expect(results[0].time).to.be.ok;
        done();
      });
    });
  });
});
