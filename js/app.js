var myApp = angular.module('myApp',['ngRoute','artistControllers']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/list',{
		templateUrl:'partials/list.html',
		controller:'ListController'
	}).when('/details/:custId',{
		templateUrl:'partials/details.html',
		controller:'DetailsController'
	}).when(
        '/contactus', {
            templateUrl: 'pages/contactus.html',
            controller:'ContactController'
        }).when(
        '/about', {
            templateUrl: 'pages/aboutus.html',
            controller: 'AboutController'
        }).otherwise({
		redirectTo:'/list'
	});
}]); 