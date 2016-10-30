angular.module('usersApp')
    .controller('PostCommentCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.postComments = [];
        $scope.postId = $stateParams.postId;
        $scope.post = {};
        $http({
            method: 'GET',
            url: '/api/comments/byPost',
            params: {
                "postId": + $stateParams.postId
            }
        }).then(function successCallback(response) {
            $scope.postComments = $scope.postComments.concat(response.data);
        }, function errorCallback(response) {
        });

        //tut tut tut, this should be combined into the above query.
        $http({
            method: 'GET',
            url: '/api/posts/' + $stateParams.postId,
        }).then(function successCallback(response) {
            $scope.post = response.data;
        }, function errorCallback(response) {
        });
    }]);