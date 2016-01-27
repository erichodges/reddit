var app = angular.module('redditClone', ['ngAnimate', 'angularMoment']);




  app.controller('mainController', function($scope) {

    	$scope.postScore = 0;
      window.scope = $scope;



      $scope.submitPost = function(isValid) {
        $scope.userPosts = $scope.userPosts || [];
          if (isValid) {
            $scope.userPosts.push($scope.userPost);
            $scope.userPost = {};
            $scope.postForm.$setPristine();
            $scope.showForm = false;
            console.log($scope.userPosts);
          }
      };

      $scope.submitComment = function(isValid) {
      $scope.comments = $scope.comments || [];
        event.preventDefault();
        if (isValid) {
          $scope.comments.push($scope.userPost);
          $scope.comment = {};
          $scope.commentForm.$setPristine();
          console.log($scope.comments);
        }
      };

      $scope.showForm = false;
      $scope.addComment = false;

});




