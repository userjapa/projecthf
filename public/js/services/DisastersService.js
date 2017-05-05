angular
    .module('disasters')
    .factory('Disasters',['$http', function($http) {
        var Disasters = {
            'get' : get,
            'create' : create,
            'delete' : del,
            'disaster' : {}
        };   
        return Disasters;

        function get() {
            console.log("Getting data...");
            return $http.get('/disasters');
        }

        function create(data) {
            return $http.post('/disasters', data);
        }

        function del(id) {
            return $http.delete('/disasters' + id);
        }   
}]);