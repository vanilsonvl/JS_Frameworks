appDirective.controller('controllerDiretive', function($scope){
    console.log('Foi');
    $scope.show = true;
    $scope.htmlText = "<h1>Texto html</h1>";
    $scope.myClass="";
    $scope.variableCloak = "variável Cloak variável Cloak variável Cloak " +
    "variável Cloak variável Cloak variável Cloak " +
    "variável Cloak variável Cloak variável Cloak variável Cloak variável Cloak " +
    "variável Cloak variável Cloak variável Cloak variável Cloak variável Cloak " +
    "variável Cloak variável Cloak variável Cloak variável Cloak variável Cloak " +
    "variável Cloak variável Cloak variável Cloak variável Cloak variável Cloak";
    $scope.myPicture = "foto1.jpg";
    $scope.ngOlaA = "<div ng-ola></div>";
    $scope.ngOlaE = "<ng-ola></ng-ola>";
    $scope.ngOlaC = "<div class='ng-ola'></div>";
});

appDirective.directive('ngOla', function(){
    return {
        restrict: 'AEC',
        scope: {
            'ngName': '@'
        },
        template: '<h3>Olá {{ ngName }}!</h3>',
        controller : ['$scope', function($scope){
            $scope.digaOla = function(name){
                console.log('Ola function ' + name + '!');
            }
        }],
        link : function(scope, iElement, iAttrs){
            console.log(iElement);
            console.log(iAttrs);
            scope.digaOla(iAttrs.ngName);
        }
    }
});
