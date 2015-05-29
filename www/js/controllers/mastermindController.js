'use strict';

var app = angular.module("mastermindCheater");

app.controller('mastermindController', function ($scope, solverService, $timeout, optionsService){
    $scope.guesses=solverService.getGuesses;
    $scope.getNextGuess = function(){
        $scope.isWaiting = true;
        $timeout(function(){
            solverService.getNextGuess();
            $scope.isWaiting = false;
        });
    }
    $scope.reset = solverService.startGuessing;
    $scope.undo = solverService.undoGuess;
    $scope.rightPlace=optionsService.getRightPlaceColour();
    $scope.addRightColour=function(positive){
        solverService.getGuesses()[solverService.getGuesses().length-1].addRightColour(positive);
    };
    $scope.addRightPlace=function(positive){
        solverService.getGuesses()[solverService.getGuesses().length-1].addRightPlace(positive);
    };
    $scope.combinationsLeft = solverService.getCombinationsLeft;
    $scope.error = solverService.getError;
});