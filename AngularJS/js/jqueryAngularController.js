app
.directive('tooltip', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attr){
			console.log(element.html());
			
			element.tooltipsy({
				offset: [0, 10],
				content: scope.textTooltip
			});
		}
	}
})

.controller("JQueryController", function($scope){
	$scope.textTooltip = "Tooltip Controller";
})

