'use strict';

var app = angular.module("mastermindCheater");

app.service('solverService', function (Guess, Combination, solverHelper, optionsService){
    var colours = Combination.getColours;
    var allCombinations = [];
    var allChecks=solverHelper.generateChecks();
    var possCombinations = [];
    var Guesses =[];
    var error;
    var waiting = false;
    var setCombinations = function(){
        //delete from previous
        possCombinations.splice(0, possCombinations.length);
        //
        allCombinations=solverHelper.generateCombinations();
        possCombinations=angular.copy(allCombinations);
    };
    this.startGuessing = function(){
        error=null;
        Guesses.splice(0, Guesses.length);
        setCombinations();
        Guesses.push(new Guess(optionsService.getStartCombination(), []));
    };
    this.startGuessing();
    this.getNextGuess=function(){
        waiting=true;
        if (possCombinations.length>0){
            error=null;
            var currentGuess=Guesses[Guesses.length-1];
            var discarded=[];
            for(var i=possCombinations.length-1;i>=0;i--){
                if(!currentGuess.validCombination(possCombinations[i])){
                    discarded.push(possCombinations[i]);
                    possCombinations.splice(i,1);
                }
            };
            if(possCombinations.length>0){
                Guesses.push(new Guess(getNextCombination(), discarded));  
            }else{
                error = "No combinations found for these criteria";
                possCombinations=discarded;
            }  
        };
        waiting=false;
    };
    var getNextCombination = function(){
        if (possCombinations.length==1||!optionsService.getHighAccuracy()){
            return possCombinations[0];
        }else{
            return getOptimalCombination();
        }        
    }
    var getOptimalCombination = function(){
        var combination;
        var min=Number.MAX_VALUE;
        angular.forEach(allCombinations, function(allCombination){
            var max = 0;
            angular.forEach(allChecks, function(check){
                var count=0;
                angular.forEach(possCombinations, function(possCombination){
                    if(solverHelper.validCheck(possCombination.checkCombination(allCombination),check)){
                        count++;
                    }
                });
                if (count>max){
                    max=count;
                }
            });
            if(max<min){
                combination=allCombination;
                min=max;
            }
        });
        return combination;
    };
    this.undoGuess=function(){
        error=null;
        if (Guesses.length>1){
            var currentGuess=Guesses[Guesses.length-1];
            possCombinations = possCombinations.concat(currentGuess.discarded);
            Guesses.splice(Guesses.length-1,1);
        }
    }
    this.getGuesses = function(){
        return Guesses;
    };
    this.getCombinationsLeft=function(){
        return possCombinations.length;
    };
    this.getError = function(){
        return error;
    };
    this.isWaiting = function(){
        return waiting;
    }
});