'use strict';

/**
 * @ngdoc function
 * @name fullstackNodeJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fullstackNodeJsApp
 */
angular.module('fullstackNodeJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
