'use strict';

describe('Controller: StackitemCtrl', function () {

  // load the controller's module
  beforeEach(module('scrollviewTestApp'));

  var StackitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StackitemCtrl = $controller('StackitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
