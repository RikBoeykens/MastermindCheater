'use strict';

var app = angular.module("mastermindCheater");

app.directive('guessDirective', function (optionsService){
        return {
        restrict: "E",
        replace: true,
        templateUrl: 'partials/directives/guessDirective.html',
        scope: {
            guess: "="
        },
        controller : function($scope) {
            $scope.rightPlace = optionsService.getRightPlaceColour();
        }
    };
});