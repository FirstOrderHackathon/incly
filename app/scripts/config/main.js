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
    .state('home.settings', {
        url: '/settings',
        templateUrl: 'views/settings/settings.html',
        controller: 'settingsCtrl'
      })
    .state('add_edit', {
      url: '/smile',
      templateUrl: 'views/add_edit/add_edit.html',
      controller: 'smileCtrl'
    })
      .state('add_edit.settings', {
        url: '/settings',
        templateUrl: 'views/settings/settings.html',
        controller: 'settingsCtrl'
      })

}])
incly.run(['$state', function($state){}]);
