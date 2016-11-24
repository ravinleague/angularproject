var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController',['$scope','$http',function ($scope,$http){

$http.get('js/data.json').success(function(data){
console.log(data)
$scope.customers = data;
$scope.customerOrder = 'name';
})

}]);


artistControllers.controller('DetailsController',['$scope','$http','$routeParams',function ($scope,$http,$routeParams){

$http.get('js/data.json').success(function(data){

$scope.customers = data;
$scope.whichCustomer = $routeParams.custId;

if($routeParams.custId > 0){
	$scope.prevItem = Number($routeParams.custId)-1;
}
else{
		$scope.prevItem = $scope.artists.length-1;
}

if($routeParams.custId < $scope.artists.length-1){
	$scope.nextItem = Number($routeParams.custId)+1;
}
else{
		$scope.nextItem=0;
}

})

}]);

artistControllers.controller('ContactController', ['$scope', function ($scope) {

    $scope.contactMessage = 'I am in Contacts Page. Awesome!';
}]);

artistControllers.controller('AboutController',
    ['$scope',
        function ($scope)
        {
                $scope.aboutusMessage = 'I am in About us Page. Awesome!';
        }
    ])