'use strict';

var app = angular.module("mastermindCheater");

app.service('optionsService', function (Combination){
    var highAccuracy=false;
    var allowDuplicates=true;
    var randomStart=false;
    this.getHighAccuracy = function(){
        return highAccuracy;
    }
    this.setHighAccuracy=function(bool){
        highAccuracy=bool;
    }
    this.getAllowDuplicates = function(){
        return allowDuplicates;
    }
    this.setAllowDuplicates=function(bool){
        allowDuplicates=bool;
    }
    this.getRandomStart= function(){
        return randomStart;
    }
    this.setRandomStart=function(bool){
        randomStart = bool;
    }
    this.getStartCombination = function(){
        var colours = Combination.getColours;
        if (allowDuplicates){
            return new Combination([colours[0], colours[0], colours[1], colours[1]]);
        }else{
            return new Combination([colours[0], colours[1], colours[2], colours[3]]);
        }
    }
    
});