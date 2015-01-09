'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Get matches for a user',
  tags:['users'],
  validate: {
    payload: {
      id: Joi.string().required()
    }
  },
  auth: false,
  handler: function(request, reply){
    User.matches(request.payload.id, function(err, results){
      //console.log('route err', err, results);
      if(err){console.log('Error getting matches :', err);}
      //console.log('results FROM ROUTE: ', results);
      reply(results).code(err ? 400 : 200);
    });
  }
};
