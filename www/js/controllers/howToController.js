'use strict';

var app = angular.module("mastermindCheater");

app.controller('howToController', ['$scope', 'optionsService', function ($scope, optionsService){
    $scope.rightPlaceColour=optionsService.getRightPlaceColourName;
}]);