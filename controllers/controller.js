var express = require("express");
var router = express.Router();
var Article = require("../models/article.js");
var Comment = require("../models/comment.js");
var bodyParser = require("body-parser");
// Method override allows for HTTP verbs PUT and DELETE where they would not have normally been allowed
var methodOverride = require("method-override");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var request = require("request");




var uri = /*"mongodb://heroku_herokulinkhereaAAaAaA" ||*/"mongodb://localhost/newsScraper";