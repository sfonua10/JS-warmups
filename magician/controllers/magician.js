var app = angular.module("MyApp", []);

app.controller("MagicController", ['$scope', function ($scope) {
    $scope.title = "Magic Time";


    $scope.magicians = [
        {
            name: "Sarat Rimal",
            age: 27,
            skills: ["Smoke", "Duplicate"]
        },
        {
            name: "Philip Amone",
            age: 24,
            skills: ["Strength", "Meditate"]
        },
        {
            name: "Butch Pau'u",
            age: 24,
            skills: ["Hammer-Strength", "Cards"]
        },
        {
            name: "Tui Critchon",
            age: 25,
            skills: ["Blob", "Facial Expressions"]
        },
        {
            name: "Bronson Kaufusi",
            age: 26,
            skills: ["Cards", "Flips"]
        }
    ];
    
    $scope.edit = function(x) {
        $scope.edit = x;
    }
}])