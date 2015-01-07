/* jshint expr:true, camelcase:false */

'use strict';

var expect       = require('chai').expect,
    //User         = require('../../server/models/user'),
    cp           = require('child_process'),
    server       = require('../../server/index'),
    Lab          = require('lab'),
    lab          = exports.lab = Lab.script(),
    describe     = lab.describe,
    helpers       = require('../helpers/helpers'),
    db            = helpers.getDb(),
    //before       = lab.before,
    beforeEach   = lab.beforeEach,
    it           = lab.it;


describe('Users', function(){
  //var cookie;
  //before(function(done){
  //});

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean_db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      //console.log('stdout' ,stdout);
      //console.log('stderr', stderr);

      /*
      var options = {
        method: 'post',
        url: '/register',
        payload: {
          username: 'bob',
          password: '123'
        }
      };
      server.inject(options, function(response){
        cookie = response.headers['set-cookie'][0].match(/hapi-cookie=[^;]+/)[0];
        done();
      });
      */
      done();
    });
  });

  describe('post /register', function(){
    it('should register a new user', function(done){
      var options = {
        method: 'post',
        url: '/register',
        payload: {
          name: 'sam',
          id: '123'
        }
      };
      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  //
  describe('post /matches', function(){
    it('should return matches for a user', function(done){
      var options = {
        method: 'post',
        url: '/matches',
        payload: {
          id: '1'
        }
      };
      server.inject(options, function(response){
        //console.log(response);
        expect(response.statusCode).to.equal(200);
        expect(response.result[0].sender_id).to.equal('2');
        expect(response.result[0].sender_name).to.equal('bob');
        done();
      });
    });
  });
  //
});

