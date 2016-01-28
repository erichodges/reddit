var app = angular.module('redditClone', ['ngAnimate', 'angularMoment']);




  app.controller('mainController', function($scope) {

      $scope.comment = {};
      $scope.comments = [];


      $scope.submitPost = function(form) {
        $scope.userPosts = $scope.userPosts || [];

        if (form.$valid) {
          $scope.postForm.date = moment().calendar();
          $scope.userPost.score = 0;
          $scope.userPosts.push($scope.userPost);
          $scope.userPost = {};
          $scope.postForm.$setPristine();
          $scope.showForm = false;
          console.log($scope.userPosts);
        }

      };

      $scope.submitComment = function(form) {
        $scope.comments = $scope.comments || [];
        
        if (form.$valid) {
          $scope.addComment = false;
          $scope.comments.push($scope.comment);
          $scope.comment = {};
        }

      
      };

      $scope.increment = function(post){
   
         post.score ++;
      }

      $scope.decrement = function(post){
         post.score --;
      }

      // $scope.showForm = false;
      // $scope.addComment = false;

});




