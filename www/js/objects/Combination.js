'use strict';

var app = angular.module("mastermindCheater");

app.factory('Combination', function (){
    var colours = ['yellow', 'red', 'blue', 'green', 'purple','saddlebrown'];
    Combination.getColours=angular.copy(colours);
    function Combination(combination){
        this.combination = combination;
    };
    Combination.prototype.getCombination=function(){
        return this.combination;
    }
    Combination.prototype.checkCombination=function(otherCombination){
        var ownCombination=this.combination;
        var checkCombination=otherCombination.combination;
        //get orange pegs
        var orangeCount =0;
        for(var i=0; i<4; i++){
            if (ownCombination[i]==checkCombination[i]){
                orangeCount++;
            }
        }
        //get white pegs
        var whiteCount = 0;
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
            whiteCount+=Math.min(thisCount,checkCount);
        });
        whiteCount-=orangeCount;
        
        return {orangePegs:orangeCount, whitePegs:whiteCount};
    };    
    return Combination;
});