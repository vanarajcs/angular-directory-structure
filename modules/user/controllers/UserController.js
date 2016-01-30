/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
user.controller("UserController", function($scope, userService, userModel) {
   
    userService.setVersion("2.0");
    
    $scope.version = userService.getVersion();
    
    var jsonObject = {
        name : "Vanaraj",
        email : "vanaraj@assistanz.com",
        phone : 9944328923
    };
    
    $scope.user = userModel.create(jsonObject).success(function(data) {
        console.log(data.name)
    });
});

