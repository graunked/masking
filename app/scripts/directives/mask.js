'use strict';

angular.module('scrollviewTestApp')
  .directive('mask', function ($famous, $famousDecorator) {
    return {
    transclude: true,
    templateUrl: 'views/mask.html',
    restrict: 'E',
    scope: {faSize: '&', faTranslate: '&', faRotateZ: '&', contentSize: '&'},
    controller: function($scope) {
      $scope.offset = function() {
        var size = $scope.faSize();
        var translate = $scope.faTranslate();
        var t = [size[0] / 2 - 1000, size[1] / 2 - translate[1]* 2];
        return t;
      };
      $scope.origin = function() {
        var offset = $scope.offset();
        var content = $scope.contentSize();
        return [offset[0] / content[0], offset[1] / content[1]];
      };
      $scope.vectorNegate = function(v) {
        return [-v[0], -v[1]];
      };
    }
  };
});
