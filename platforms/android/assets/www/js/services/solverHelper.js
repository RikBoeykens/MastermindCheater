'use strict';

var app = angular.module("mastermindCheater");

app.service('solverHelper', function (Combination){
    var colours = Combination.getColours;
    this.generateCombinations = function(){
        var combinations =[];
        for(var i=0;i<6;i++){
            for(var j=0;j<6;j++){
                for(var k=0;k<6;k++){
                    for(var l=0;l<6;l++){
                        combinations.push(new Combination([colours[i], colours[j], colours[k],colours[l]]));
                    }
                }
            }
        }
        return combinations;
    };
    this.generateChecks = function(){
        var checks = [];
        for(var i=0; i<4;i++){
            for(var j=0; j<4;j++){
                if (i+j<=4){
                    checks.push({orangePegs:i, whitePegs:j});
                }
            }
        }
        return checks;
    };
    this.validCheck = function(checkA, checkB){
        return JSON.stringify(checkA)==JSON.stringify(checkB);
    };
});