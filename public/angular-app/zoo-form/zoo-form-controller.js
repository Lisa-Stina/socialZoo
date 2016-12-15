angular.module('socialZoo').controller('zooFormController', zooFormController);

function zooFormController($route, $routeParams, zooDataFactory) {
  var vm = this;
  vm.isSubmitted = false;
  zooDataFactory.postZoo(vm).then(function(response) {
    vm.zoo = response.data;

  });



  vm.ZooAddOne = function() {
    var postData = {
      name: vm.name,
      username : vm.username,
      password : vm.password,
      email: vm.email,
      country : vm.country,
      city : vm.city,
      category : vm.category,
      openingYear : vm.openingYear,
      numberAnimals : vm.numberAnimals,
      picture : vm.picture,
      createOn : vm.createOn,
      modifyOn : vm.modifyOn
    }
    };
    if (vm.zooForm.$valid) {
      zooDataFactory.postZoo(postData).then(function(response) {
        if (response.status === 200) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }

  };
