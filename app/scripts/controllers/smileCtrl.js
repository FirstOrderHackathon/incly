'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService, dataService) {


//TODO Hook up this example with user in $scope.
	$scope.information = {
		title: "",
		imageUrl: '',
		content: ''
	}

	  $scope.userLoggedIn = false;
		// TODO: ADD TRUE TO LOGGED IN UsER
		$scope.newItemCreated = false;
		// TODO: ADD TRUE TO NEW ITEM
	  $scope.editEnabled = false;
	  $scope.storyClick = false;

	  $scope.userLogin = {
	    username: '',
	    password: ''
	  }

		function resetTextFile() {
			$scope.textFile = {
				title: '',
				content: ''
			}
		}

		resetTextFile();

		function failedLoginOrSetup() {
			$scope.userLogin = {
		    username: '',
		    password: ''
	  	}
		}


$scope.showIt = {"one": false, "two": false, "three": false}
	var Toast = {
	  "loginFailed": "Please try again, an incorrect username and/or password was entered.",
	  "signupFailed": "The username that was entered already exists, please enter a different username",
	  "uploadSuccess": "Success",
	  "uploadFail": "The documents failed to upload, please try again.",
	  "editFail": "Whoops, something went wrong, please try again.",
		"success": "Success"
	}



  $scope.signUp = function(loginData) {
    dataService.newUser(loginData, function (data) {
			if (data != "Username taken") {
	      $scope.userLoggedIn = false;
			  Materialize.toast(Toast.signupFailed, 2000) // 4000 is the duration of the toast
				document.getElementsByClassName("toast")[0].style.backgroundColor = "red";
				failedLoginOrSetup();
			}
			else {
	      $scope.userLoggedIn = true;
	      $scope.user = data.data;
			}
    })
  }

  $scope.login = function(loginData) {
    dataService.loginUser(loginData, function (data) {
			if (data.status == 401) {
				failedLoginOrSetup();
      	$scope.userLoggedIn = false;
			  Materialize.toast(Toast.loginFailed, 2000) // 4000 is the duration of the toast
				document.getElementsByClassName("toast")[0].style.backgroundColor = "red";
			}
			else {
	      $scope.userLoggedIn = true;
	      $scope.user = data.data;
				Materialize.toast(Toast.success, 2000) // 4000 is the duration of the toast
				document.getElementsByClassName("toast")[0].style.backgroundColor = "green";
			}
    })
  }

	$scope.formToggle = function(data) {
		if (data === undefined || data === false) {
			$scope.textForm = true;
		}
		else {
			$scope.textForm = false;
			resetTextFile();
		}
	}

	$scope.uploadFiles = function(user, num, fileData, textFile) {

		//TODO: save user data to user @ information {object} user.information.(put data here)
		var sendData = {
			user: "",
			fileData: '',
			textFile: ''
		}
		// Button WITHOUT textFiles
		if (num == 0) {
			sendData = {
				user: user,
				fileData: fileData,
				textFile: false
			}
			//TODO Send DATA to Backend (BUSBOY)
			// dataService.newItem(sendData, function(res) {
			// 	console.log(res);
			// }
		}
		// Button with textFiles
		else {
			sendData = {
				user: user,
				fileData: fileData,
				textFile: textFile
			}
			//TODO Send DATA to Backend (BUSBOY)
			// dataService.newItem(sendData, function(res) {
			// 	console.log(res);
			// }
		}
	}


  $scope.toggleEdit = function() {
    $scope.editEnabled = !$scope.editEnabled;
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

  $scope.clickMeMFer = function() {
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
