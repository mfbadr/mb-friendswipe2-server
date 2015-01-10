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


describe('Swipes', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean_db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('post /newswipe', function(){
    it('should log a new swipe', function(done){
      var options = {
        method: 'post',
        url: '/newswipe',
        payload: {
          sender: '3',
          target: '2',
          liked: true
        }
      };
      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  //
  //
});

