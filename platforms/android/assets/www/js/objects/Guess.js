'use strict';

var app = angular.module("mastermindCheater");

app.factory('Guess', function (Combination){
    function Guess(combination, discarded){
        this.combination = combination;
        this.info={orangePegs:0, whitePegs:0};
        this.discarded=discarded;
    };
    Guess.prototype.getCombination=function(){
        return this.combination.combination;
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
        return JSON.stringify(checkCombination.checkCombination(this.combination))==JSON.stringify(this.info);
    };
    Guess.prototype.getDiscarded=function(){
        return this.discarded;
    };
    
    return Guess;
});