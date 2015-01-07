'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}', config: require('../definitions/static/angular')},
  // post to register on init
  {method: 'post',    path: '/matches', config: require('../definitions/users/matches')},
  {method: 'post',   path: '/register', config: require('../definitions/users/register')}
  //post to swipe
  //get to matches
  //get to logout
  //calls to facebook come from front end
];

