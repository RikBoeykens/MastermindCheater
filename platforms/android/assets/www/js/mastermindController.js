'use strict';

var app = angular.module("mastermindCheater");

app.controller('mastermindController', function ($scope, solverService){
    $scope.guesses=solverService.getGuesses;
    $scope.getNextGuess = solverService.getNextGuess;
    $scope.reset = solverService.startGuessing;
    $scope.undo = solverService.undoGuess;
    $scope.addWhite=function(positive){
        solverService.getGuesses()[solverService.getGuesses().length-1].addWhite(positive);
    };
    $scope.addOrange=function(positive){
        solverService.getGuesses()[solverService.getGuesses().length-1].addOrange(positive);
    };
    $scope.combinationsLeft = solverService.getCombinationsLeft;
    $scope.error = solverService.getError;
});