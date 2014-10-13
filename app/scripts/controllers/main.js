'use strict';

angular.module('scrollviewTestApp')
  .controller('MainCtrl', function ($scope, $famous) {

    var EventHandler = $famous["famous/core/EventHandler"];

    $scope.scrollEvents = new EventHandler();

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
