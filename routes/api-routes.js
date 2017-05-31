// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var loginController = require('./../controllers/login_controller.js');
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Users
  app.get("/api/user", loginController.saveUser);
  app.get("/api/", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // findAll returns all entries for a table when used with no options
    db.Round.findAll({
      where: query,
      include: [db.user]
    }).then(function(dbRound) {
      // We have access to the Users as an argument inside of the callback function
      res.json(dbRound);
    });
  });

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


// =========================POST for entry game record ============================
  // app.post("/api/entry", function(req, res) {
  //   console.log("hello");
  //     console.log(JSON.stringify(req.body));
  //     var obj = {
  //       attack: req.body.position,
  //       victory: req.body.result,
  //       map_type: req.body.mapType,
  //       map_name: req.body.mapSelect
  //     };
  //
  //     req.body.teamComp.forEach(function(element) {
  //       obj[element] = true;
  //     });
  //     console.log(obj);
  //     db.Round.create(obj).then(function(data) {
  //       res.json(data);
  //     });
  //   });

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



  app.get("/api/hero/:id", function(req, res) {
    db.Hero.findOne({
      // where: { req.params.id },
      include: [db.User]
    }).then(function(dbHero) {
      res.json(dbHero);
    });
  });

  app.get("/api/pick/:char1?/:char2?/:char3?/:char4?/:char5?", function(req, res) {
    var queryObj = {};
    if (req.params.char1) {
      queryObj[req.params.char1] = true;
    }
    if (req.params.char2) {
      queryObj[req.params.char2] = true;
    }
    if (req.params.char3) {
      queryObj[req.params.char3] = true;
    }
    if (req.params.char4) {
      queryObj[req.params.char4] = true;
    }
    if (req.params.char5) {
      queryObj[req.params.char5] = true;
    }

    db.Round.findAll({
      where: queryObj
    }).then(function(data) {
      res.json(data);
    });
  });

};
