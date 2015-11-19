/* Angular config file */

var MyApp = angular.module("MyApp", ['ngRoute', 'ui.router']);

MyApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    
    // Enable HTML5 mode
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    // Get rid of the trailing slash problem
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.url();
        
        if ('/' === path[path.length - 1]) {
            return path.replace(/\/$/, '');
        }
        
        return false;
    });
    
    // Default page
    $urlRouterProvider.otherwise('/');
    
    // Website states
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
    });
}]);