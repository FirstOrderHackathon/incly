'use strict';
angular.module("incly")
.service("dataService", function($http, $q) {

  var getUrl = ""; // Get a List of Items in the Database
  var putUrl = ""; // Save a Individual List
  var deleteUrl = ""; // Delete a Single Item
  var postUrl = ""; // Post New Item into the Database
  var getUrlSingleItem = ""; // Single Item Get

//Full Database Get
  this.getItems = function(callback) {
    $http.get(getUrl)
      .then(callback)
  };
  //Single Items CRUD Requests
  this.saveItem = function(id, product, callback) {
    $http.put(putUrl + id, product)
      .then(callback)
  };
  this.deleteItem = function(id, callback) {
    var tempUrl = deleteUrl + id;
    $http.delete(tempUrl)
    .then(callback);
  };
  this.newItem = function(post, callback) {
    $http.post(postUrl, post)
    .then(callback);
  };
  this.getItem = function(callback) {
    $http.get(getUrlSingleItem)
      .then(callback)
  };



});
