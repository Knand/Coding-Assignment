(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject =['$scope'];
function LunchCheckController($scope) {

	$scope.name ="";// body..
	$scope.show ="";
	
	$scope.checkname = function () {
		
		$scope.show = checkword($scope.name);
		

	};



	function checkword(name) {
		var words = name.split(',');

		if (name==""){

			return "Please enter data first";

		}else if (words.length <=3){
			return "Enjoy!" ;
			
		}else {
			return "Too much!" ;
			
		}
		
	};
}
})();
