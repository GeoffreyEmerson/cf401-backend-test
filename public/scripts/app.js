angular.module('imageGalleryApp', [])
.controller('mainCtrl', function($scope, $http) {

  $scope.updateImages = function() {
    $http({
      method: 'GET',
      url: '/api/images'
    })
    .then(function successCallback(response) {
      $scope.images = response.data;
    }, function errorCallback(response) {
      console.log('Error getting images:',response);
    });
  };

  // call once on page load
  $scope.updateImages();

  $scope.imageSubmit = function() {
    console.log('Button works');
    console.log('$scope.newUrl',$scope.newUrl);
    console.log('$scope.newDesc',$scope.newDesc);
    
    let data = {
      'url': $scope.newUrl,
      'description': $scope.newDesc
    };

    $http({
      method: 'POST',
      data,
      url: '/api/images'
    })
    .then(function successCallback() {
      $scope.newUrl = '';
      $scope.newDesc = '';
      $scope.updateImages();
    }, function errorCallback(response) {
      console.log('Error getting images:',response);
    });
  };
});
