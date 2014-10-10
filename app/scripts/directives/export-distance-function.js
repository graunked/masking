'use strict';

angular.module('scrollviewTestApp')
  .directive('exportDistanceFunction', function ($famous) {
    console.log("defining export function");
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs) {
        var scrollview = $famous.getIsolate(scope).renderNode
        console.log(scrollview)
        scope.scrollViewDistance = function(i, height) {
          return i - (scrollview.getAbsolutePosition() / height)
        };
      }
    };
  });
