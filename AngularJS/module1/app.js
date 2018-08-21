(function () {
'use strict';
var x = 'd';
angular.module('myApp',[])
.controller('MyController', function ($scope) {
	$scope.name ="";// body..
	$scope.total = 0;
	$scope.sum = function () {
		var totalName = cal($scope.name);
		$scope.total = totalName;
	};

	function cal(string) {
		
	};
});
})();
