'use strict';

var Joi  = require('joi'),
    Swipe = require('../../../models/swipe');

module.exports = {
  description: 'Get matches for a user',
  tags:['users'],
  validate: {
    payload: {
      sender: Joi.string().required(),
      target: Joi.string().required(),
      liked: Joi.boolean().required()
    }
  },
  auth: false,
  handler: function(request, reply){
    Swipe.new(request.payload, function(err, results){
      //console.log('route err', err, results);
      if(err){console.log('Error inserting swipe :', err);}
      reply(results).code(err ? 400 : 200);
    });
  }
};
