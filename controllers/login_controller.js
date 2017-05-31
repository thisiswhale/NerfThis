var bcrypt = require('bcryptjs');
var db = require('./../models');

module.exports = {
    saveUser: function(req, res) {
        var body = req.body;
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(body.password, salt, function(err, hash) {
                // Store hash in your password DB.
                db.User.create({
                    name: req.body.name,
                    password: hash
                }).then(function(user) {
                    res.json(user);
                })
            });
        });
    },
    authenticateUser: function(req, res) {
        //query for password where username = req.body.username
        bcrypt.compare(req.body.password, queryResults, function(err, res) {
            if (res) {
                res.json(true);
                redirect("/picker");
            } else {
                res.json(false);
                alert("Passowrd doesn't match. Please try again.");
            }
        })
    }
}