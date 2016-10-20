var app = angular.module("MyApp", []);

app.controller("MainController", ['$scope', '$http', function($scope, $http) {
    $scope.title = "Star Wars";
    $scope.opening;
    
    $http.get("http://swapi.co/api/films/1/").then(function(response) {
        console.log(response.data);
        $scope.opening = response.data.opening_crawl;
    })
}])