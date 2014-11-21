'use strict';

describe('Controller: QuestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackNodeJsApp'));

  var QuestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionsCtrl = $controller('QuestionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of questions to the scope', function () {
    expect(scope.questions.length).toBe(2);
  });
});
