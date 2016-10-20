var app = angular.module("MyApp", []);

app.controller("MainController", ['$scope', 'MightyService',  function($scope, $MS) {
    $scope.state = "FL";
    $scope.message = "FRONT-END PAGE";
    $scope.type = "getLegislators";
    
    $scope.getIt = function() {
        $MS.getInformation($scope.type, $scope.state).then(function(response) {
            console.log(response.data);
        })
    }

}])