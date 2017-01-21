angular.module('socialZoo').controller('profilController', profilController);

function profilController($route, $routeParams, zooDataFactory,$location) {
    var vm = this;

    var zoo = {};


    zooDataFactory.postZoo(zoo).then(function(response){
      vm.zoo = response.data;
    });

    vm.addZoo = function() {
      var zoo = {
        name: vm.name,
        category: vm.category,
        city: vm.city,
        country: vm.country,
        openingYear: vm.openingYear,
        numberAnimals: vm.numberAnimals,
        description: vm.description,
        password: vm.password,
        email: vm.email,
      };
      if (vm.addZoo) {
         vm.zoo = response.data;      }

  }

}
