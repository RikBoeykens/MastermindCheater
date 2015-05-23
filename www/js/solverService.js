'use strict';

var app = angular.module("mastermindCheater");

app.service('solverService', function (Guess){
    var colours = Guess.getColours;
    var combinations = [];
    var Guesses =[];
    var error;
    var generateCombinations = function(){
        //delete from previous
        combinations.splice(0,combinations.length);
        Guesses.splice(0, Guesses.length);
        for(var i=0;i<6;i++){
            for(var j=0;j<6;j++){
                for(var k=0;k<6;k++){
                    for(var l=0;l<6;l++){
                        combinations.push([colours[i], colours[j], colours[k],colours[l]]);
                    }
                }
            }
        }
    };
    this.startGuessing = function(){
        error=null;
        generateCombinations();
        Guesses.push(new Guess(['yellow','yellow','red','red'], []));
    };
    this.startGuessing();
    this.getNextGuess=function(){
        if (combinations.length>0){
            error=null;
            var currentGuess=Guesses[Guesses.length-1];
            var discarded=[];
            for(var i=combinations.length-1;i>=0;i--){
                if(!currentGuess.validCombination(combinations[i])){
                    discarded.push(combinations[i]);
                    combinations.splice(i,1);
                }
            };
            if(combinations.length>0){
                Guesses.push(new Guess(combinations[0], discarded));  
            }else{
                error = "No combinations found for these criteria";
            }  
        };
    };
    this.undoGuess=function(){
        error=null;
        var currentGuess=Guesses[Guesses.length-1];
        combinations = combinations.concat(currentGuess.discarded);
        Guesses.splice(Guesses.length-1,1);
    }
    this.getGuesses = function(){
        return Guesses;
    };
    this.getCombinationsLeft=function(){
        return combinations.length;
    };
    this.getError = function(){
        return error;
    }
});