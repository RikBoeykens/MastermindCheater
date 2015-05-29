'use strict';

var app = angular.module("mastermindCheater");

app.factory('Combination', function (){
    var colours = ['yellowPeg', 'redPeg', 'bluePeg', 'greenPeg', 'purplePeg','brownPeg'];
    Combination.getColours=angular.copy(colours);
    function Combination(combination){
        this.combination = combination;
    };
    Combination.prototype.add=function(colour){
        this.combination.push(colour);
    }
    Combination.prototype.getCombination=function(){
        return this.combination;
    }
    Combination.prototype.checkCombination=function(otherCombination){
        var ownCombination=this.combination;
        var checkCombination=otherCombination.combination;
        //get rightPlace pegs
        var rightPlaceCount =0;
        for(var i=0; i<4; i++){
            if (ownCombination[i]==checkCombination[i]){
                rightPlaceCount++;
            }
        }
        //get rightColour pegs
        var rightColourCount = 0;
        angular.forEach(colours, function(colour){            
            var checkCount = 0;
            var thisCount = 0;
            for(var i=0;i<4;i++){
                if (colour==ownCombination[i]){
                    thisCount++;
                };
                if (colour==checkCombination[i]){
                    checkCount++;
                };
            };
            rightColourCount+=Math.min(thisCount,checkCount);
        });
        rightColourCount-=rightPlaceCount;
        
        return {rightPlace:rightPlaceCount, rightColour:rightColourCount};
    };    
    return Combination;
});