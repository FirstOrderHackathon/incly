'use strict';
var angular = require('angular');
angular.module("incly", ['ngAnimate']);
//STATE CONFIG
require('./scripts/config/main.js');
//CONTROLLERS
require('./scripts/controllers/smileCtrl.js');
require('./scripts/controllers/indexCtrl.js');
require('./scripts/controllers/mainCtrl.js');
//SERVICE
require('./scripts/services/encryptionService.js');
require('./scripts/services/dataService.js');
