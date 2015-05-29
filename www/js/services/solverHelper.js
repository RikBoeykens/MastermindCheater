'use strict';

var app = angular.module("mastermindCheater");

app.service('solverHelper', function (Combination, optionsService){
    var colours = Combination.getColours;
    this.generateCombinations = function(){
        return generateRecursiveCombinations(colours, 4);
    };
    this.generateChecks = function(){
        var checks = [];
        for(var i=0; i<4;i++){
            for(var j=0; j<4;j++){
                if (i+j<=4){
                    checks.push({rightPlace:i, rightColour:j});
                }
            }
        }
        return checks;
    };
    this.validCheck = function(checkA, checkB){
        return JSON.stringify(checkA)==JSON.stringify(checkB);
    };
    var generateRecursiveCombinations=function(colourArray, count){
        var resultArray=[];
        for(var i=0;i<colourArray.length;i++){
            if(count<=1){
                resultArray.push(new Combination([colourArray[i]]));
            }else{
                var tempArray=angular.copy(colourArray);
                var tempColour = tempArray[i];
                if(!optionsService.getAllowDuplicates()){
                    tempArray.splice(i, 1);
                }
                var newCombinations=generateRecursiveCombinations(tempArray,count-1);
                angular.forEach(newCombinations, function(newCombination){
                    newCombination.add(tempColour);
                    resultArray.push(newCombination);
                });
            }
        }
        return resultArray;
    };
});