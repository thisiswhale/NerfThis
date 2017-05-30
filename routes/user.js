var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

module.exports = function(app){

// router.get('/', ensureLoggedIn, function(req, res, next) {
//   res.render('user', { user: req.user });
// });

// }
