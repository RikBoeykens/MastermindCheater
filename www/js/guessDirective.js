'use strict';

var app = angular.module("mastermindCheater");

app.directive('guessDirective', function (){
        return {
        restrict: "E",
        replace: true,
        templateUrl: 'partials/guessDirective.html',
        scope: {
            guess: "="
        }
    };
});