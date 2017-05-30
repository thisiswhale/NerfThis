// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
//CRUD
  app.get("/api/", function(rec,res){
  var query = {};
  if (req.query.user_id;){
    query.UserId= req.query.user_id;
  }
    //to find round history for player
  db.Round.findAll({
    where: query,
    include:[db.User]
  }).then(fucntion(dbRound){
          res.json(dbRound);
  });
});
  
app.get("/api/hero/:id", function(req,res){
db.Hero.findOne({
  where: {idL req.params.id},
   include: [db.User]}).then(function(dbHero) {
    res.json(dbHero);
  });
});

};
