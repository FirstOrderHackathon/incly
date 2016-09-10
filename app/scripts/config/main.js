'use strict';
var mainSite = angular.module("mainSite", [require('angular-ui-router')])
mainSite.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main/index.html',
      controller: 'indexCtrl'
    })
}])
mainSite.run(['$state', function($state){}]);
