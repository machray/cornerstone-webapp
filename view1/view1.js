'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', view1Ctrl]);

function view1Ctrl($scope, $http) {
	$scope.data = [];
	
	var data = function(response)
	{
	    $scope.data = response.data;
	};
	
	$http.get("http://localhost:8765/merchant-locator/merchants")
    .then(data);
}