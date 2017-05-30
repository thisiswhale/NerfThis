// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    //CRUD
    app.get("/api/", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        //to find round history for player
        db.Round.findAll({
            where: query,
            include: [db.User]
        }).then(fucntion(dbRound) {
            res.json(dbRound);
        });
    });

    app.get("/api/hero/:id", function(req, res) {
        db.Hero.findOne({
            where: { idL req.params.id },
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

        db.Round.findAll({ where: queryObj }).then(function(data) {
            res.json(data);
        });
    });

}