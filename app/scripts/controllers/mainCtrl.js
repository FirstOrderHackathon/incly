'use strict';
angular.module("incly")
.controller("mainCtrl", function($scope, $interval, $location, encryptionService) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
