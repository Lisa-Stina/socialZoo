(function(){
var app = angular.module('socialZoo', ['ngRoute']);

//Routes----------------------------------------------------------------

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "partials/home.html"
  })
    // .when('/main', {
    //   templateUrl: 'angular-app/zoo-create/zoo.html',
    //   controller: mainController,
    //   controllerAs: 'vm'
    // })
    .when("/zoo",{
          templateUrl: "partials/zoo.html"
        })
    .when("/profil",{
          templateUrl: "partials/profil.html",
          controller:  profilController,
          controllerAs: 'vm'
        })
   .when("/zoo1",{
          templateUrl: "partials/zoo1.html"
        })
    .when("/zoo2",{
          templateUrl: "partials/zoo2.html"

       })
    // .when("/zoo3",{
    //           templateUrl: "partials/zoo2.html"
    //           //controller: newZooController,
    //           //controllerAs: 'vm'
    //         })
    // .when("/zoo/:zooId")
    // .otherwise({
    //   redirectTo: '/'
    // });
}
]);
//Routes------------------------------------------------------------------
//Directives--------------------------------------------------------------
app.directive('header', function(){
  return{
    restrict: 'A',
    templateUrl: 'partials/common/header.html',
    link: function($scope,$element){
      $(".button-collapse").sideNav();
    }
  }
});
//Directives--------------------------------------------------------------

//comment-----------------------------------------------------------------

app.controller("PrimerControlador" , function ($scope) {
	$scope.comentarios = [
		{

		}

	];
	$scope.agregarComentario = function () {
		$scope.comentarios.push($scope.newComen);
		$scope.newComen={};
	}
})
})();
