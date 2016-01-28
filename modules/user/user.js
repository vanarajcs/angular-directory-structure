/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var user = angular.module('myApp.user', ["ngRoute"]);

user.config(function($routeProvider) {
    $routeProvider
        .when('/user', {
            controller: 'UserController',
            templateUrl: 'modules/user/partials/user.html'
        })
        
        .when('/user/list', {
            controller: 'UserListController',
            templateUrl: 'modules/user/partials/list.html'
        })
        
        .otherwise({redirectTo: '/'});
});


