//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//configuring the express server
var app = express();

//setting a port on the local machine so the browser know where to find the app.
var PORT = process.env.PORT || 8080;

//setting express app for data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listening and starting the server
app.listen(PORT,function(){
    console.log("App listening on: " + PORT);
});