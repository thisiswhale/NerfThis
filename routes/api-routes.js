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


  // GET route for getting all of the Users
  app.get("/api/Users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      // We have access to the Users as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // POST route for saving a new User
  app.post("/api/Users", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      // We have access to the new User as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // DELETE route for deleting Users. We can get the id of the User to be deleted from
  // req.params.id
  app.delete("/api/Users/:id", function(req, res) {
    // We just have to specify which User we want to destroy with "where"
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });

  });

  // PUT route for updating Users. We can get the updated User data from req.body
  app.put("/api/User", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
