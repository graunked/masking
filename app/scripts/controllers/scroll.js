'use strict';

angular.module('scrollviewTestApp')
  .controller('ScrollCtrl', function ($scope, $timeline) {

    $scope.distance = function(i) {
      return $scope.scrollViewDistance(i, 120);
    };

    $scope.scale = $timeline([
      [-1, [0.5, 0.5]],
      [0, [1, 1]],
      [1, [0.5, 0.5]],
    ])

    $scope.rotate = $timeline([
      [-1, -Math.PI / 10],
      [0, 0],
      [1, Math.PI / 10],
    ])

    $scope.translate = $timeline([
      [-1, [0, 50, 0]],
      [0, [0, 0, 0]],
      [1, [0, 50, 0]],
    ])

  });
