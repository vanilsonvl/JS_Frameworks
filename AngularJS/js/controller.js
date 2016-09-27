app.controller('controller01', function($scope){
    $scope.controllerName = "Controller 01";
    $scope.click = function(){
        $scope.welcome = "Bem Vindo.";
    }
    $scope.values = ["Primeiro", "Segundo", "Terceiro"];
    $scope.adicionarValue = function(newValue){
        $scope.values.push(newValue);
    }
});

app.controller('controller02', function($scope){
    $scope.objects = [];
    $scope.obj = ObjectHtml();
    $scope.types_obj = ["Tipo - 01", "Tipo - 02", "Tipo - 03"];
    $scope.adicionarObj = function(obj){
        $scope.objects.push(obj);
        $scope.obj = ObjectHtml();
    };
});

function ObjectHtml(){
    return {
        name: "",
        number: "",
        type_obj: "Tipo - 01",
        location: ""
    }
}
