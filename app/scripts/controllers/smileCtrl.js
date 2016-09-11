'use strict';
angular.module("incly")
.controller("smileCtrl", function($scope, $interval, encryptionService) {
encryptionService.encryptionOfString("I love Code", function(encryptedString) {
  console.log(encryptedString);
  encryptionService.decryptionOfString(encryptedString, function(decryptedString) {
    console.log(decryptedString);
  })
});
});
