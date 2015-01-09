'use strict';

module.exports = [
  {method: 'get',  path: '/{param*}', config: require('../definitions/static/angular')},
  {method: 'post', path: '/matches',  config: require('../definitions/users/matches')},
  {method: 'post', path: '/newswipe',    config: require('../definitions/swipes/new')},
  {method: 'post', path: '/getswipes',    config: require('../definitions/users/swipes')},
  {method: 'post', path: '/register', config: require('../definitions/users/register')}
];

