'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService, dataService) {

  $scope.userLogin = {
    username: '',
    password: ''
  }


  // document.getElementById('formUpload').addEventListener('click', function(e) {
  //   document.getElementById('uploadForm').submit();
  //   e.preventDefault();
  // })


  $scope.login = function(loginInfo) {
    dataService.loginUser(loginInfo, function (returnData) {
      $scope.user = returnData.data;
      console.log(returnData.data);
    })
  }

  $scope.signUp = function(signupInfo) {
    dataService.newUser(signupInfo, function(data) {
      $scope.newUser = data.data;
    })
  }

  $scope.getItems = function(itemList) {
    dataService.getItems(itemList, function(data) {
      $scope.items = data;
    })
  }

  $scope.getUserHistory = function(user) {
    dataService.getUser(user, function(userData) {
      $scope.userHistory = userData.data;
      console.log(userData.data);
    })
  }


$scope.editPost = function(newPost, userId) {
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
