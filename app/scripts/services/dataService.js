'use strict';
angular.module("incly")
.service("dataService", function($http, $q) {

  var getUrl = "/posts"; // Get a List of Items in the Database
  var putUrl = "/edit/"; // Save a Individual List
  var deleteUrl = "/delete/"; // Delete a Single Item
  var postUrl = "/add"; // Post New Item into the Database
  var getUrlSingleItem = "/post/"; // Single Item Get
  var getUserForScopeUrl = "";

//Full Database Get
  this.getItems = function(callback) {
    $http.get(getUrl)
      .then(callback)
  };
  //Single Users CRUD Requests
  this.getUser = function(user, callback) {
    $http.get(getUserForScopeUrl + "/:" + user)
      .then(callback)
  };
  this.newUser = function(user, callback) {
    $http.post(postUrl, user)
    .then(callback);
  };
  this.saveItem = function(product, id, callback) {
    $http.post(putUrl + id, product)
      .then(callback)
  };
  this.deleteItem = function(id, callback) {
    var tempUrl = deleteUrl + id;
    $http.delete(tempUrl)
    .then(callback);
  };
  this.newItem = function(item, callback) {
    $http.post(postUrl, item)
    .then(callback);
  };



});
