MyApp.controller('MainController', ['mainService', function (mainService) {
    
    "use strict";
    
    // Local variables
    var vm = this;
    
    // View bindings
    vm.users = [];
    vm.numberOfUsers = getNumberOfUsers;
    
    // Get data from the service
    mainService.getData().then(function (data) {
        vm.users = data;
    });
    
    // Get the number of all users
    function getNumberOfUsers() {
        return Object.keys(vm.users).length;
    }
}]);