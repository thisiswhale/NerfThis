// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/returnUsers", function(req, res) {
    console.log(JSON.stringify(req.body) + "this is one ");
    db.User.findOne({
      where: {
        userName: req.body.userName,
        password: req.body.password
      }
    }).then(function(dbUser) {
      res.json(dbUser)
    }).catch(function(err) {
      res.json(err);
    })
  });

  app.post("/api/Users", function(req, res) {
    db.User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      // We have access to the new User as an argument inside of the callback function
      res.json(dbUser);
    }).catch(function(err) {
      res.json(err)
    })
  });

  app.get("/api/allUser",function(req,res) {
    db.User.findAll({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser){
      res.json(dbUser);
    }).catch(function(err){
      res.json(err)
    })
  });




};
