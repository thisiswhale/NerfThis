// Dependencies
// =============================================================
var path = require("path");
var express = require('express');
var passport = require('passport');
var router = express.Router();
var requireRole = require('../requireRole');



// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/picker', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/pick.html"));
    });

};