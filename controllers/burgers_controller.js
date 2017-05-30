
var express = require("express");
var Burger = require("../models/burger.js");
// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
//var bodyParser = require('body-parser');
var db = require("../models");
require("handlebars")

router.get("/", function(req, res){
	db.Burger.findAll({}).then(function(data){

		res.render("index", {burgers: data});
	});
});

router.post("/", function(req, res){
	db.Burger.create({
		name: req.body.name
	}).then(function(){
		res.redirect("/");
	});
		// ["burger_name", "devoured"], 
		// [req.body.burger_name, req.body.devoured],
	// 	req.body.burger_name,
});

router.put("/:id", function(req, res){
	// var condition = "id = "+req.prams.id;
	// console.log("condition", condition);
	db.Burger.update({
		devoured: true
	}, {
		where:{ id: req.params.id }
	}).then( function() {
		 res.redirect("/"); 
		});
});

module.exports = router;