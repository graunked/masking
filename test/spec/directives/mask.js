'use strict';

describe('Directive: mask', function () {

  // load the directive's module
  beforeEach(module('scrollviewTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mask></mask>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mask directive');
  }));
});
