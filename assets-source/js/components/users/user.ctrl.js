angular.module('usersApp')
    .controller('UserCtrl', ['$scope', '$http', function($scope, $http){
    $scope.users = [];
        $http({
            method: 'GET',
            url: '/api/users'
        }).then(function successCallback(response) {
            $scope.users = $scope.users.concat(response.data);
        }, function errorCallback(response) {
        });
}]);