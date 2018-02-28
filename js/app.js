var myApp = angular.module('myApp',["ngRoute"]);
myApp.config(function($routeProvider,$locationProvider) {
	
	$locationProvider.html5Mode(true);
    $routeProvider
    .when("/a", {
        templateUrl : "index.html"
    })
    .when("/partner", {
        templateUrl : "partner.html"
    })
    .when("/2", {
        templateUrl : "./view/services/2.html"
    })
    .when("/career", {
        templateUrl : "career.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

myApp.controller('mainController',['$scope',function($scope){

	$scope.handle = '';

}])
.controller('SideMenuController',['$scope','$http',function($scope,$http){
	var MainScope = $scope;
	MainScope.name="Pulkit";
	MainScope.Email  = "pulkitkkr@gmail.com";
	$scope.socialLinks = [
		{url:"www.facebook.com", printText:"Facebook"},
		{url:"http://www.google.com", printText:"Google"},
		{url:"http://www.instagram.com", printText:"Instagram"}
	];
	$scope.submitToServer = function(){

		//$http.post("url",{});
		var dataForServer = {
			Name : MainScope.name,
			Email: MainScope.Email
		}
 		$http.post("www.facebook.com/kjgjhgj",dataForServer,function(response){
 			console.log(response);
 		})
		alert("your Name is:"+$scope.name);
	}
}]);