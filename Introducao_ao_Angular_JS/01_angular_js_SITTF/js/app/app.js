angular.module("meuMundo", ["ngRoute"])

.config(
    function($routeProvider){
        $routeProvider
        .when(
            '/home',
          {
            templateUrl:'templates/home.html',
            controller:"indexController"
          }
        )
        .when(
            '/contacto',
          {
            templateUrl:'templates/contacto.html',
            controller:""
          }
        );

        $routeProvider.otherwise({
            redirectTo:"/home"
        })
    }
)