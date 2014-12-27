'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register a User',
  tags:['users'],
  validate: {
    payload: {
      name: Joi.string().min(3).required(),
      id: Joi.string().min(3).required()
    }
  },
  auth: false,
  handler: function(request, reply){
    User.register(request.payload, function(err, results){
      //console.log('route err', err, results);
      reply().code(err ? 400 : 200);
    });
  }
};
