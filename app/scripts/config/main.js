'use strict';
var incly = angular.module("incly", [require('angular-ui-router')])
incly.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main/index.html',
      controller: 'indexCtrl'
    })

    .state('smile', {
      url: '/smile',
      templateUrl: 'views/main/index.html',
      controller: 'smileCtrl'
    })
}])
incly.run(['$state', function($state){}]);
