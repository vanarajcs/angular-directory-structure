/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('myApp.user.service',[])
    
    .service('userService', function() {
        
        var version;
    
        var name;

        var email;

        var hobbies = [];

        var qualification = {};
    
        return {

            setVersion : function(ver) {
                version = ver;
            },

            getVersion : function() {
                return version;
            },

            setName : function(na) {
                name = na;
            },

            getName : function() {
                return name;
            },

            setEmail : function(em) {
                email = em;
            },

            getEmail : function() {
                return email;
            },

            setHobbies : function(hob) {
                hobbies = hob; 
            },

            getHobbies : function() {
                return hobbies;
            },

            setQualification : function(qua) {
                qualification = qua; 
            },

            getQualification : function() {
                return qualification;
            }
        };
        
    });


