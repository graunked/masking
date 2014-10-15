'use strict';

angular.module('scrollviewTestApp')
  .controller('MainCtrl', function ($scope, $famous) {

    var EventHandler = $famous["famous/core/EventHandler"];
    var TouchSync  = $famous["famous/inputs/TouchSync"];

    $scope.scrollEvents = new EventHandler();

    var sync = new TouchSync();

    $scope.scrollEvents.pipe(sync);

    sync.on("update", function(data) {
      $scope.translate[0] = $scope.translate[0] + data.delta[0];
      $scope.translate[1] = $scope.translate[1] + data.delta[1];
    });

    $scope.rotation = function() {
      return ((Date.now() % 1000) / 1000) * Math.PI * 2;
    };

    $scope.translate = [100, 100];

    var t = function() {
      return ((Date.now() % 2000 ) / 2000) * Math.PI * 2;
    };

    $scope.y = function() {
      return Math.sin(t()) * 100 + 300;
    };

    $scope.x = function() {
      return Math.cos(t()) * 100 + 300;
    };

  });
