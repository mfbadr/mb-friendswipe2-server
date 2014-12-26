'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}', config: require('../definitions/static/angular')},
  // post to register on init
  {method: 'post',   path: '/register', config: require('../definitions/users/register')}
];
