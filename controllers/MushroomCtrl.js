'use strict';

angular.module("mushroom").controller("MushroomCtrl", function($scope, factory) {

  factory.getShrooms()
  .then((shroomObjects) => {
    console.log(shroomObjects);
    $scope.shroomArr = [];
    for (let shroom in shroomObjects.data) {
      $scope.shroomArr.push(shroomObjects.data[shroom]);
    }
    console.log($scope.shroomArr, "hey");
  });

});