'use strict';
angular.module("incly")
.service("encryptionService", function() {

this.encryptionOfString = function(stringToEncrypt, callback) {
  let outputStringFromEncryption = "";
  for (var x = 0; x < stringToEncrypt.length; x++) {
    let tempLetterInEncryption = "";
// 32 - 126
    if (stringToEncrypt.charCodeAt(x) >= 32 || stringToEncrypt.charCodeAt(x) <= 126) {
        //set number range (119)
      if (stringToEncrypt.charCodeAt(x) <= 119) {
        tempLetterInEncryption = String.fromCharCode(stringToEncrypt.charCodeAt(x) + 7)
      }
        //if not in range
      else {
        tempLetterInEncryption = String.fromCharCode((stringToEncrypt.charCodeAt(x) - 94) + 7)
      }
        //compose encrypted
        outputStringFromEncryption += tempLetterInEncryption;
    }
  }
  //output
  callback(outputStringFromEncryption)
}


this.decryptionOfString = function(stringToDecrypt, callback) {
  let outputStringFromDecryption = "";
  for (var x = 0; x < stringToDecrypt.length; x++) {
    let tempLetterInDecryption = "";
// 32 - 126
    if (stringToDecrypt.charCodeAt(x) >= 32 || stringToDecrypt.charCodeAt(x) <= 126) {
        //set number range (119)
      if (stringToDecrypt.charCodeAt(x) <= 39 || stringToDecrypt.charCodeAt(x) >= 32) {
        tempLetterInDecryption = String.fromCharCode((stringToDecrypt.charCodeAt(x) + 94) - 7)
      }
        //if not in range
      else {
        tempLetterInDecryption = String.fromCharCode(stringToDecrypt.charCodeAt(x) - 7)
      }
        //compose encrypted
        outputStringFromDecryption += tempLetterInDecryption;
    }
  }
  //output
  callback(outputStringFromDecryption)
}







});
