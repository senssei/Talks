'use strict';

/**
 * @ngdoc function
 * @name fullstackNodeJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fullstackNodeJsApp
 */
angular.module('fullstackNodeJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
