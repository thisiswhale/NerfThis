var express = require("express");

var router = express.Router();
var hero = require("../models/hero.js");
module.exports = {
  findAll: function(req, res, next) {
    hero.findAll().then(function(data) {
      res.json(data);
    })
  }
}
