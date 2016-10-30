var myApp = angular.module('usersApp', ['ui.router']);
myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/users");
    //
    // Now set up the states
    $stateProvider
        .state('users', {
            url: "/users",
            templateUrl: "templates/partials/users.html",
            controller: 'UserCtrl'
        })
        .state('userPosts', {
            url: "/posts/:userId",
            templateUrl: "templates/partials/userPosts.html",
            controller: 'UserPostCtrl'
        })
        .state('postComments', {
            url: "/comments/:postId",
            templateUrl: "templates/partials/postComments.html",
            controller: 'PostCommentCtrl'
        })
    ;
    $locationProvider.html5Mode(true);
}])
;