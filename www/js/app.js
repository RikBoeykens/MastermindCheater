'use strict';

var app = angular.module("mastermindCheater", ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/main", {
            templateUrl: "partials/main.html",
            controller: "mainController"
        })
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
        .otherwise({redirectTo:"/main"});
});