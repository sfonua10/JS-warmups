var express = require("express");
var morgan = require("morgan");
var request = require("request");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 5000;
var key = "d4f7d189f2ac5f9e4cfe6df11d556e35";
app.use(morgan("dev"));



app.use(express.static(__dirname));
app.use(bodyParser.json());


app.get("/api/:urlParams", function(req,res) {
    request.get({url: "http://www.opensecrets.org/api/"+req.params.urlParams+key}, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            res.send(body)
        }
    })
})
app.listen(port, function() {
    console.log("Reached port " + port);
})