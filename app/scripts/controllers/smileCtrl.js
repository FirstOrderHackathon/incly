'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService, dataService) {
  $scope.userLoggedIn = false;
  // TODO: ADD TRUE TO LOGGED IN UsER
  $scope.newItemCreated = false;
  // TODO: ADD TRUE TO NEW ITEM
  $scope.userHistory = [{
    "user": "bob",
    "content": "123",
    "voteCount": 5,
    "imageUrl": "String",
    "imageName": "name"}]
  $scope.newUserCreation = function(inputFromHtmlForUser) {
    dataService.newUser(inputFromHtmlForUser, function (returnedNewUserJSON) {

        $scope.userLoggedIn = true;
      $scope.user = returnedNewUserJSON;
    })
  }

  $scope.getUserFromLogin = function(user) {
    dataService.getUser(user, function(userData) {
      $scope.user = userData;
    })
  }

$scope.saveFileUploadOrText = function(fileToSave, userId) {
  dataService.saveItem(fileToSave, userId, function(returnedUserDataJSON) {
    $scope.user = returnedUserDataJSON;
  })
}

$scope.deleteFile = function (idForItemToDelete) {
  dataService.deleteItem(idForItemToDelete, function(newUserAfterDelete) {
    $scope.user = newUserAfterDelete;
  })
}

$scope.createFile = function(itemToManifest) {
  dataService.newItem(itemToManifest, function(userAfterItemManifestation) {
    $scope.user = userAfterItemManifestation;
  })
}


  // Example Encryption
    // encryptionService.encryptionOfString("I love Code", function(encryptedString) {
    //   console.log(encryptedString);
    //   encryptionService.decryptionOfString(encryptedString, function(decryptedString) {
    //     console.log(decryptedString);
    //   })
    // });
});
