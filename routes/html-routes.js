// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require('express');
app = express();
// var router = express.Router();
var requireRole = require('../requireRole');
// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/dashboard", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    });
    app.get("/entry", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/user-entry.html"));
    });
    app.get("/picker", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/pick.html"));
    });
    //     app.get("/about", function(req, res){
    //         res.sendFile(path.join(__dirname, "../public/about.html"));
    //     });


    app.get('/login',
        function(req, res) {
            res.render('login', {
                env: env
            });
        });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


};