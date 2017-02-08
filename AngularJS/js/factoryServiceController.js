app.controller('controllerService', ['$scope', 'operacao', 'ObjectHtml', function($scope, operacao, ObjectHtml){
    console.log(operacao.frase());

    $scope.obj = new ObjectHtml();
    $scope.obj.name = "Objeto1";
}]);
