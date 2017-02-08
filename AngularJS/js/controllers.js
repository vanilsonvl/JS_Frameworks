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

app.controller('controllerHttp', function($scope, $http){
    $scope.datas = [];
    $scope.url = "http://www.w3schools.com/angular/customers.php";
    $scope.dataCustomers = '';
    $scope.idCustomers = 1;
    $scope.loadStates = function(){
        $http
            .get("uf.json")
            .success(function(data){
                $scope.datas = data;
            })
            .error(function(){
                console.log('Dados não carregados...');
            })
    };
    $scope.loadCustomers = function(){
        console.log('tentando');
        $http
            .get($scope.url)
            .success(function(data){
                if($scope.idCustomers < 0)
                    $scope.idCustomers = 1;
                else if ($scope.idCustomers > 15) {
                    $scope.idCustomers = 15;
                }
                $scope.dataCustomers = data.records[$scope.idCustomers - 1];
                console.log(data);
            })
            .error(function(){
                console.log('Dados não carregados...');
            })
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
