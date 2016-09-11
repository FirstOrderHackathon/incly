'use strict';
angular.module("incly")
.service("dataService", function($http, $q) {


  // Get database, new user, save user, deleted user, get user,
  var getUrl = "/posts"; // Get a List of Items in the Database
  var putUrl = "/edit"; // Save a Individual List
  var deleteUrl = "/delete"; // Delete a Single Item
  var postUrl = "/add"; // Post New Item into the Database
  var getUrlSingleItem = "/post"; // Single Item Get
  var getUserForScopeUrl = "/userHistory";
  var signUpNewUser = "/signup";
  var loginUrl = "/login"

//Full Database Get
  this.getItems = function(callback) {
    $http.get(getUrl)
      .then(callback)
  };
  //Single Users CRUD Requests
  this.getUser = function(username, callback) {
    $http.get(getUserForScopeUrl + "/" + username)
      .then(callback)
  };
  // New User
  this.newUser = function(userUsernameAndPassword, callback) {
    $http.post(signUpNewUser, userUsernameAndPassword)
    .then(callback);
  };
  // Edit Item
  this.saveItem = function(id, callback) {
    $http.post(putUrl + "/" + id)
      .then(callback)
  };
  // Delete Items
  this.deleteItem = function(id, callback) {
    var tempUrl = deleteUrl + "/" + id;
    $http.delete(tempUrl)
    .then(callback);
  };
  // New Post
  this.newItem = function(item, callback) {
    $http.post(postUrl, item)
    .then(callback);
  };
  // login
  this.loginUser = function(userData, callback) {
    $http.post(loginUrl, userData)
      .then(callback);
  }


});
