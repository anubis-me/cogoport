/**
 * Created by abhi on 20-Jan-18.
 */
var app = angular.module('gameRoutes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        // AngularJS Route Handler
        $routeProvider

            //Home
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.html'
            })

           .when('/game', {
                templateUrl: 'app/views/pages/games.html'
            }) .when('/contact', {
                templateUrl: 'app/views/pages/contact.html'
            })


            .otherwise({ redirectTo: '/' }); // If user tries to access any other route, redirect to home page

        $locationProvider.html5Mode({ enabled: true, requireBase: false }); // Required to remove AngularJS hash from URL (no base is required in index file)
    });
