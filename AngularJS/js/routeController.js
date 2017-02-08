appRoute.controller('controllerRoute', function($scope, $route, $routeParams, $location){
    console.log('foi');
    $scope.route = $route;
    $scope.location = $location;
    $scope.routeParams = $routeParams;
});

appRoute.controller('controllerInicial', function($scope){
    console.log('Controller Inicial');
});

appRoute.controller('controllerPagina1', function($scope){
    console.log('Controller Pagina1');
})

appRoute.controller('controllerPagina2', function($scope, $routeParams){
    $scope.params = $routeParams;
    console.log('Controller Pagina2');
    console.log("id: " + $scope.params.id);
})

appRoute.config(function($routeProvider, $locationProvider){

    $routeProvider
    .when("/",{
        templateUrl: "html_route_inicial.html",
        controller: "controllerInicial"
    })
    .when('/html_route_pagina1.html',{
        templateUrl: "html_route_pagina1.html",
        controller: "controllerPagina1"
    })
    .when('/html_route_pagina2.html/:id',{
        templateUrl: "html_route_pagina2.html",
        controller: "controllerPagina2"
    })
    .otherwise({
        redirectTo: "/"
    });

    $locationProvider.html5Mode(true);
});
