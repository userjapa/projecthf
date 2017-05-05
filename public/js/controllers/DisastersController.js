angular
    .module('disasters', [])
    .controller('DisastersController', ['$scope', '$location', 'Disasters', function($scope, $location, Disasters) {
        $scope.tagline = "Let's save the people!";
        
        $scope.data = [];
        Disasters.get().then(function(response) {
            var aux = response.data;
            for (x in aux) {
                $scope.data.push(aux[x]);
            }
        });
        
        $scope.disaster = Disasters.disaster;
        $scope.showMap = function(ind) {
            Disasters.disaster = $scope.data[ind];
            $location.url('/disasters/map');
        }
}]);