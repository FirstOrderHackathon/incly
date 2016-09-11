'use strict';
angular.module("incly")
.controller("indexCtrl", function($scope, $interval, encryptionService, dataService) {

  dataService.getItems(function(databaseLoadForIndex) {
    $scope.databaseLoad = databaseLoadForIndex;
  })









});
