'use strict';

var app = angular.module("mastermindCheater");

app.service('optionsService', ['Combination', function (Combination){
    var highAccuracy=false;
    var allowDuplicates=true;
    var randomStart=false;
    var rightPlaceColours =[{class:"redRightPlace", name:"red"}, {class:"blackRightPlace", name:"black"}, {class:"orangeRightPlace", name:"orange"}];
    var rightPlaceColourNo= 1;
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
    this.getRightPlaceColours=function(){
        return rightPlaceColours;
    }
    this.getRightPlaceColour =function(){
        return rightPlaceColours[rightPlaceColourNo].class;
    }
    this.getRightPlaceColourName=function(){
        return rightPlaceColours[rightPlaceColourNo].name;
    }
    this.getRightPlaceColourNo = function(){
        return rightPlaceColourNo;
    }
    this.setRightPlaceColour=function(number){
        rightPlaceColourNo=number;
    }
}]);