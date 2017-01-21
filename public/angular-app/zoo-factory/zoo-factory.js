angular.module('socialZoo').factory('zooDataFactory', zooDataFactory);

function zooDataFactory($http) {
  return {
    zooCreat: zooCreat,
    ZooOne: ZooOne,
    postZoo : postZoo
  };

  function zooCreat() {
    return $http.get('/api/zoo/').then(complete).catch(failed);
  }

  function ZooOne(zooid) {
    return $http.get('/api/zoo/' + zooid).then(complete).catch(failed);
  }

  function postReview(id, review) {
    return $http.post('/api/zoo/' + id + '/reviews', review).then(complete).catch(failed);
  }

  function complete(response) {
    return response;
  }
  function failed(error) {
    console.log(error.statusText);
  }

  function postZoo(zoo) {
    return $http.post('/api/zoo', zoo).then(complete).catch(failed);
  }

}
