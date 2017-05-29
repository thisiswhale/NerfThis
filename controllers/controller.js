var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

router.get("/", function(req, res) {
  // send us to the next get function instead.
  //res.redirect("/");
});