'use strict';

var app = angular.module("mastermindCheater");

app.factory('Guess', function (Combination){
    function Guess(combination, discarded){
        this.combination = combination;
        this.info={rightPlace:0, rightColour:0};
        this.discarded=discarded;
    };
    Guess.prototype.getCombination=function(){
        return this.combination.combination;
    }
    Guess.prototype.getRC=function(){
        return this.info.rightColour;
    };
    Guess.prototype.getRP=function(){
        return this.info.rightPlace;
    };
    Guess.prototype.addRightColour = function(positive){
        if (positive){
            //add
            if(this.info.rightColour+this.info.rightPlace<4){
                this.info.rightColour++;
            }
        }else{
            //subtract
            if (this.info.rightColour>0){
                this.info.rightColour--;
            }
        }
    };
    Guess.prototype.addRightPlace = function(positive){
        if (positive){
            //add
            if(this.info.rightColour+this.info.rightPlace<4){
                this.info.rightPlace++;
            }
        }else{
            //subtract
            if (this.info.rightPlace>0){
                this.info.rightPlace--;
            }
        }        
    };
    Guess.prototype.validCombination=function(checkCombination){
        return JSON.stringify(checkCombination.checkCombination(this.combination))==JSON.stringify(this.info);
    };
    Guess.prototype.getDiscarded=function(){
        return this.discarded;
    };
    
    return Guess;
});