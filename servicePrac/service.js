var app = angular.module("MyApp");

app.service("MightyService",['$http', function($http) {
    this.arr = [];
    
    
    this.getInformation = function(type, state) {
        var params = "?method="+type+"&id="+state+"&output=json&apikey=";
        return $http.get("http://localhost:5000/api/"+encodeURIComponent(params)).then(function(response) {
            return response;
        })
    }
}])

//http://www.opensecrets.org/api/?method=getLegislators&id=NJ&apikey=d4f7d189f2ac5f9e4cfe6df11d556e35