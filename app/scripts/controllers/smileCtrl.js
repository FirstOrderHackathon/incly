'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService, dataService) {

  $scope.username = '';
  $scope.password = '';

  $scope.newUserCreation = function(inputFromHtmlForUser) {
    dataService.newUser(inputFromHtmlForUser, function (returnedNewUserJSON) {
      $scope.user = returnedNewUserJSON;
    })
  }

  $scope.login = function(loginInfo) {
    dataService.login(loginInfo, function (returnData) {
      $scope.user = returnData;
    })
  }

  $scope.getItems = function(itemList) {
    dataService.getItems(itemList, function(data) {
      $scope.items = data;
    })
  }

  $scope.getUserHistory = function(user) {
    dataService.getUser(user, function(userData) {
      $scope.userHistory = userData;
    })
  }

$scope.saveFileUploadOrText = function(fileToSave, userId) {
  dataService.saveItem(fileToSave, userId, function(returnedUserDataJSON) {})
}

$scope.deleteFile = function (idForItemToDelete) {
  dataService.deleteItem(idForItemToDelete, function(newUserAfterDelete) {})
}

$scope.createFile = function(itemToManifest) {
  dataService.newItem(itemToManifest, function(userAfterItemManifestation) {})
}


  // Example Encryption
    // encryptionService.encryptionOfString("I love Code", function(encryptedString) {
    //   console.log(encryptedString);
    //   encryptionService.decryptionOfString(encryptedString, function(decryptedString) {
    //     console.log(decryptedString);
    //   })
    // });
});
