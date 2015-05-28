'use strict';

var app = angular.module("mastermindCheater");

app.controller('optionsController', function ($scope, optionsService){
    $scope.highAccuracy = optionsService.getHighAccuracy;
    $scope.setHighAccuracy=function(){
        optionsService.setHighAccuracy(!optionsService.getHighAccuracy());
    }
    $scope.allowDuplicates = optionsService.getAllowDuplicates;
    $scope.setAllowDuplicates = function(){
        optionsService.setAllowDuplicates(!optionsService.getAllowDuplicates());
    }
    $scope.randomStart=optionsService.getRandomStart;
    $scope.setRandomStart = function(){
        optionsService.setRandomStart(!optionsService.getRandomStart());
    }
});