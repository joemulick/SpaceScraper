var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");
var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars as default template view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports the routes from controller
var routes = require('./controllers/controller.js');
app.use('/', routes);

// Listen on PORT variable for APP
app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
});
