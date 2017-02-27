var express         = require("express");
var mongoose        = require("mongoose");
var path            = require("path");

var app = express();

var routes      = require("./routes/routes");



app.set("port", process.env.PORT || 5010);

app.get('/', function (req, res){
    res.json({hi: "world"});
});

app.use(routes);

app.listen(app.get("port"), function () {
    console.log("server started on port " + app.get("port"));
});