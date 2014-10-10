'use strict';

angular.module('scrollviewTestApp')
  .controller('StackItemCtrl', function ($scope, $timeline) {

    $scope.distance = function(i) {
      return $scope.scrollViewDistance(i, 200);
    };

    $scope.translate = $timeline([
      [-1, [-10, 110, 0]],
      [0, [0, 0, 0]],
      [100, [-100 * 200, -100 * 20, -1]],
    ])

  });
