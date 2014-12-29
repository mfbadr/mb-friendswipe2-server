/* jshint expr:true */

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
      var swipe = new Swipe({sender: '1', targer:'2', liked: true});
      expect(swipe).to.be.instanceof(Swipe);
      expect(swipe.sender).to.equal('1');
      done();
    });
  });

  //describe('.register', function(){
    //it('should register a new User', function(done){
      //User.register({name:'sam', id:'123'}, function(err, results){
        //expect(err).to.be.null;
        //expect(results.rows[0].id).to.equal('123');
        //expect(results.rows[0].name).to.equal('sam');
        //done();
      //});
    //});
  //});

});
