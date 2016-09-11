'use strict';
var incly = angular.module("incly", [require('angular-ui-router')])
incly.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'indexCtrl'
    })
    .state('home', {
      url: '/view',
      templateUrl: 'views/view/view.html',
      controller: 'indexCtrl'
    })
    .state('add_edit', {
      url: '/smile',
      templateUrl: 'views/add_edit/add_edit.html',
      controller: 'indexCtrl'
    })
}])
incly.run(['$state', function($state){}]);
