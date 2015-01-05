/* jshint expr:true, camelcase:false */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Swipe       = require('../../server/models/swipe'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('Swipe', function(){

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a Swipe object', function(done){
      var swipe = new Swipe({sender: '1', target:'2', liked: true});
      expect(swipe).to.be.instanceof(Swipe);
      expect(swipe.sender).to.equal('1');
      done();
    });
  });

  describe('.new', function(){
    it('should insert a new swipe', function(done){
      var obj = {sender: '3', target:'1', liked: true};
      Swipe.new(obj, function(err, results){
        expect(err).to.be.null;
        expect(results.rows[0]).to.be.ok;
        expect(results.rows[0].sender).to.equal('3');
        done();
      });
    });
  });
//
  describe('.query', function(){
    it('should should return an array of facebook ids, names, and match times', function(done){
      var userId = 1;
      Swipe.query(userId, function(err, results){
        console.log(err, results);

        expect(results[0].liked).to.be.ok;
        expect(results[0].sender_name).to.equal('bob');
        expect(results[0].time).to.be.ok;
        done();
      });
    });
  });
//
});
