angular
    .module('app', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'MainController'
        })
        .when('/disasters', {
            templateUrl : 'views/disasters.html',
            controller : 'DisastersController'
        })
        .when('/disasters/map', {
            templateUrl : 'views/map.html',
            controller : 'DisastersController'
        }); 
       
    $locationProvider.html5Mode(true);   
    
}]);