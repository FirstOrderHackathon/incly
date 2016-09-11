'use strict';
angular.module("incly")
.controller("indexCtrl", function($scope, $interval, encryptionService) {
encryptionService.encryptionOfString("I love Code", function(encryptedString) {
  console.log(encryptedString);
  encryptionService.decryptionOfString(encryptedString, function(decryptedString) {
    console.log(decryptedString);
  })
});
});
