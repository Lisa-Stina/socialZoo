(function(){
  var app = angular.module('SocialZoo', ['ngRoute']);

  app.directive('header', function(){
    return{
      restrict: 'A',
      templateUrl: 'partials/common/header.html'
    }
  });
  app.directive('footer', function(){
    return{
      restrict: 'A',
      templateUrl: 'partials/common/footer.html'
    }
  });








})();
