'use strict';
angular.module("incly")
.controller("indexCtrl", function($scope, $interval, encryptionService, dataService) {
  dataService.getItems(function(databaseLoadForIndex) {
    $scope.databaseLoad = databaseLoadForIndex.data;
  })

$scope.showMore = false;
$scope.more = function(id) {
  dataService.getPostById(id, function(data) {
    $scope.showMore = true;
    $scope.postInput = data.data;
  })
}








});
