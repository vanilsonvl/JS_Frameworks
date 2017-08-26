appAnimate.controller('AnimateController', function($scope){
    
    $scope.items = ['1', '2', '3'];
    $scope.addItem = function(){
        if($scope.items.indexOf($scope.itemadd) == -1){
            $scope.items.push($scope.itemadd);
        }
    }
})