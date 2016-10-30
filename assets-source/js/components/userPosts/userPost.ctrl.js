angular.module('usersApp')
    .controller('UserPostCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
        $scope.postComments = [];
        $http({
            method: 'GET',
            url: '/api/posts/byUser',
            params: {
                "userId": + $stateParams.userId
            }
        }).then(function successCallback(response) {
            $scope.postComments = $scope.postComments.concat(response.data);
        }, function errorCallback(response) {
        });
    }]);