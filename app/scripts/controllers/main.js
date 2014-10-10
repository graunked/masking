'use strict';

angular.module('scrollviewTestApp')
  .controller('MainCtrl', function ($scope, $famous) {

    var EventHandler = $famous["famous/core/EventHandler"];

    $scope.scrollEvents = new EventHandler();

    $scope.colors = _.map(_.range(50), randomColor);


  });
