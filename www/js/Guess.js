'use strict';

var app = angular.module("mastermindCheater");

app.factory('Guess', function (){
    var colours = ['yellow', 'red', 'blue', 'green', 'purple','saddlebrown'];
    Guess.getColours=angular.copy(colours);
    function Guess(combination, discarded){
        this.combination = combination;
        this.info={whitePegs:0, orangePegs:0};
        this.discarded=discarded;
    };
    Guess.prototype.getCombination=function(){
        return this.combination;
    }
    Guess.prototype.getWhite=function(){
        return this.info.whitePegs;
    };
    Guess.prototype.getOrange=function(){
        return this.info.orangePegs;
    };
    Guess.prototype.addWhite = function(positive){
        if (positive){
            //add
            if(this.info.whitePegs+this.info.orangePegs<4){
                this.info.whitePegs++;
            }
        }else{
            //subtract
            if (this.info.whitePegs>0){
                this.info.whitePegs--;
            }
        }
    };
    Guess.prototype.addOrange = function(positive){
        if (positive){
            //add
            if(this.info.whitePegs+this.info.orangePegs<4){
                this.info.orangePegs++;
            }
        }else{
            //subtract
            if (this.info.orangePegs>0){
                this.info.orangePegs--;
            }
        }        
    };
    Guess.prototype.validCombination=function(checkCombination){
        var ownCombination=this.combination;
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
        
        return (whiteCount==this.info.whitePegs&&orangeCount==this.info.orangePegs);
    };
    Guess.prototype.getDiscarded=function(){
        return this.discarded;
    };
    
    return Guess;
});