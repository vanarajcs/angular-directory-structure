/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var contact = angular.module('myApp.contact', ["ngRoute", "myApp.user"]);

contact.config(function($routeProvider) {
    $routeProvider
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'modules/contact/partials/contact.html'
        })
        
        .otherwise({redirectTo: '/'});
});


