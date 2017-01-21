angular.module('socialZoo').controller('newZooController', newZooController);

function newZooController(zooDataFactory, $scope, $routeParams) {
  var vm = this;
  // //var id = $routeParams.zooId;
  // zooDataFactory.zooCreat().then(function(response) {
  //   vm.zoos = response.data;
    //vm.zooId = _getZoo(response.data.zoo);

    var zooid = $routeParams.zooid;
            vm.zoos = {};
    zooDataFactory.ZooOne('5852c2da8b8686d9f42aaae3').then(function(response) {
              vm.zoos = response.data;
                console.log(vm.zoos);
            });





//   vm.addReview = function() {
//
//     var token = jwtHelper.decodeToken($window.sessionStorage.token);
//     var username = token.username;
//
//     var postData = {
//       name: username,
//       rating: vm.rating,
//       review: vm.review
//     };
//     if (vm.reviewForm.$valid) {
//       hotelDataFactory.postReview(id, postData).then(function(response) {
//         if (response.status === 200) {
//           $route.reload();
//         }
//       }).catch(function(error) {
//         console.log(error);
//       });
//     } else {
//       vm.isSubmitted = true;
//     }
//   };
//
 }
