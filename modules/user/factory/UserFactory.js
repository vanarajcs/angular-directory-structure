/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
user.factory('$userModel', function($http){
    return {
        findById: function(id) {
            return $http.get("Api Url" + id);
        },
        
        findAll: function() {
            return $http.get("Api Url");
        },
        
        create : function(jsonObject) {
            return $http.post("Api Url", jsonObject);
        },
        
        update : function(jsonObject) {
            return $http.post("Api Url", jsonObject);
        },
        
        remove : function(id) {
            return $http.get("Api Url");
        }
    };               
});
