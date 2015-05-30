'use strict';

var app = angular.module("mastermindCheater", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/mastermind", {
            templateUrl: "partials/mastermind.html",
            controller: "mastermindController"
        })
        .when("/options", {
            templateUrl: "partials/options.html",
            controller: "optionsController"
        })
        .when("/howto", {
            templateUrl: "partials/howTo.html",
            controller: "howToController"
        })
        .otherwise({redirectTo:"/mastermind"});
});