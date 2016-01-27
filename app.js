angular.module('redditClone', []).controller('mainController', function($scope) {

	$scope.postScore = 0;


  $scope.submitPost = function(isValid) {
  $scope.userPosts = $scope.userPosts || [];
    event.preventDefault();
    if (isValid) {
      $scope.userPosts.push($scope.userPost);
      $scope.userPost = {};
      $scope.postForm.$setPristine();
      console.log($scope.userPosts);
    }
  };

  $scope.showForm = false;

});


