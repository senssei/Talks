'use strict';

/**
 * @ngdoc directive
 * @name fullstackNodeJsApp.directive:tags
 * @description
 * # tags
 */
angular.module('fullstackNodeJsApp')
  .directive('tags', function () {
    return {
      template: '<a ng-repeat="tag in question.tags" class="label label-default tag">{{tag}}</a>',
      restrict: 'E'
    };
  });
