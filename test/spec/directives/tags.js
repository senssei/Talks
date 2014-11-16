'use strict';

describe('Directive: tags', function () {

  // load the directive's module
  beforeEach(module('fullstackNodeJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tags></tags>');
    element = $compile(element)(scope);

    expect(element.length).toBe(1);
  }));
});
