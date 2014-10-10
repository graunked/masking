'use strict';

angular.module('scrollviewTestApp')
  .controller('StackCtrl', function ($scope, $famous) {

    var EventHandler = $famous["famous/core/EventHandler"];
    var TouchSync = $famous["famous/inputs/TouchSync"];

    $scope.scrollEvents = new EventHandler();

    $scope.sync = new TouchSync({
      direction: 0
    });

    $scope.scrollEvents.pipe($scope.sync);

    $scope.scrollEvents.on("touchmove", function(x) {
      console.log(x);
    });

    $scope.colors = _.map(_.range(50), randomColor);


  });
