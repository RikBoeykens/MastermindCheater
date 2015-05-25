'use strict';

var app = angular.module("mastermindCheater");

app.service('optionsService', function (){
    var highAccuracy=false;
    this.getHighAccuracy = function(){
        return highAccuracy;
    }
    this.setHighAccuracy=function(bool){
        highAccuracy=bool;
    }
});