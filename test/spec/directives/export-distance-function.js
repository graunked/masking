'use strict';

describe('Directive: exportDistanceFunction', function () {

  // load the directive's module
  beforeEach(module('scrollviewTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<export-distance-function></export-distance-function>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the exportDistanceFunction directive');
  }));
});
