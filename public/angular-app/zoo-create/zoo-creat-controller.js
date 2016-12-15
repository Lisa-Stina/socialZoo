angular.module('socialZoo').controller('mainController', mainController);

function mainController(zooDataFactory){
  var vm = this;
  vm.title = "zoo";

  zooDataFactory.zooCreat().then(function(response) {
    vm.zoos = response.data;

  })
}
