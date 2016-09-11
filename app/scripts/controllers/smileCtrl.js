'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService, dataService) {
$scope.check = function() {
if($scope.showIt.one == true) {}
if($scope.showIt.two == true) {}
	if($scope.showIt.three == true) {}
}
$scope.showIt = {"one": false, "two": false, "three": false}

	var Toast = {
	  "loginFailed": "Please try again, an incorrect username and/or password was entered.",
	  "signupFailed": "The username that was entered already exists, please enter a different username",
	  "uploadSuccess": "Success",
	  "uploadFail": "The documents failed to upload, please try again.",
	  "editFail": "Whoops, something went wrong, please try again."
	}


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


  $scope.signUp = function(loginData) {
    dataService.newUser(loginData, function (data) {
        $scope.userLoggedIn = true;
        $scope.user = data;
    })
  }

  $scope.login = function(loginData) {
    dataService.loginUser(loginData, function (data) {
      $scope.userLoggedIn = true;
      $scope.user = data

    })
  }


  $scope.userLoggedIn = false;
  $scope.textForm = false;
  $scope.editEnabled = false;
  $scope.storyClick = false;

  $scope.userLogin = {
    username: '',
    password: ''
  }

  $scope.toggleEdit = function() {
    $scope.editEnabled = !$scope.editEnabled;

  }

  $scope.getUserFromLogin = function(user) {
    dataService.getUser(user, function(userData) {
      $scope.user = userData;
    })
  }

$scope.saveFileUploadOrText = function(fileToSave, userId) {
  dataService.saveItem(fileToSave, userId, function(returnedUserDataJSON) {
  	if (err) {

  	}
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
console.log(document.getElementsByClassName("toast"))

  $scope.clickMeMFer = function() {
  Materialize.toast(Toast.loginFailed, 4000) // 4000 is the duration of the toast
	document.getElementsByClassName("toast")[0].style.backgroundColor = "red";
  Materialize.toast(Toast.signupFailed, 4000) // 4000 is the duration of the toast
	document.getElementsByClassName("toast")[0].style.backgroundColor = "red";
  Materialize.toast(Toast.uploadSuccess, 4000) // 4000 is the duration of the toast
  	document.getElementsByClassName("toast")[0].style.backgroundColor = "green";
  Materialize.toast(Toast.editFail, 4000) // 4000 is the duration of the toast
  	document.getElementsByClassName("toast")[0].style.backgroundColor = "red";
  Materialize.toast(Toast.uploadFail, 4000) // 4000 is the duration of the toast
  	document.getElementsByClassName("toast")[0].style.backgroundColor = "red";

}

  // Example Encryption
    // encryptionService.encryptionOfString("I love Code", function(encryptedString) {
    //   console.log(encryptedString);
    //   encryptionService.decryptionOfString(encryptedString, function(decryptedString) {
    //     console.log(decryptedString);
    //   })
    // });
});
