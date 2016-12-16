angular.module('socialZoo').controller('profilController', profilController);

function profilController(zooDataFactory,$location){

    var vm = this;

    vm.register = function() {
      var zoo = {
        name: vm.name,
        category: vm.category,
        city: vm.city,
        country: vm.country,
        openingYear: vm.opening_year,
        numberAnimals: vm.numberAnimals,
        description: vm.description,
        password: vm.password,
        email: vm.email,
      };
      zooDataFactory.postZoo(zoo).then(function(result){
        $location.path("/zoo2");
      });

    // vm.master = {};
    //
    // vm.update = function(zoo) {
    //   vm.master = angular.copy(zoo);
    // };
    //
    // vm.reset = function() {
    //   vm.zoo = angular.copy(vm.master);
    // };
    //
    // vm.reset();
  };
}
