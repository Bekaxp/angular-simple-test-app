MyApp.factory('mainService', ['$http', '$q', function($http, $q) {
    
    "use strict";
    
    function getServerData() {
        
        "use strict";
        
        var d = $q.defer();
        
        $http.get('data/serverData.json').success(function (response) {
            d.resolve(response);
        });
        
        return d.promise;
    }
    
    return {
        getData: getServerData
    };
    
}]);