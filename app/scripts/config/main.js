'use strict';
var incly = angular.module("incly", [require('angular-ui-router')])
incly.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/view/view.html',
      controller: 'indexCtrl'
    })
    .state('add_edit', {
      url: '/smile',
      templateUrl: 'views/add_edit/add_edit.html',
      controller: 'smileCtrl'
    })

}])
incly.run(['$state', function($state){}]);
