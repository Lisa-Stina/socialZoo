(function(){
var app = angular.module('socialZoo', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  /*.when('/', {
    templateUrl: 'angular-app/main/main.html',
    access: {
      restricted: false
    }
  })*/
    .when('/zoo', {
      templateUrl: 'angular-app/zoo-create/zoo.html',
      controller: mainController,
      controllerAs: 'vm'
    })
    .when('/', {
      templateUrl: 'angular-app/zoo-form/zoo-form.html',
      controller: zooFormController,
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}
]);

})();
