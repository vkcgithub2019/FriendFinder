//Dependencies

var path = require("path");

//routes
module.exports = function(app){
    //html GET request
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default to home if matching route is not found
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};