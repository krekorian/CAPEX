var exports = module.exports = {}
var db = require('../models/user');

// exports.signupadd = function (req, res) {

//     db.User.findAll({
//         where: { username: req.body.username }
//     }).then(function (users) {
//         if (users.length > 0) {
//             res.json({
//                 duplicateUser: true
//             });
//             //At some point, make sure that only one user can be associated with an email.
//         } else {
//             res.render('signup');
//         }
//     })





// }

exports.signup = function (req, res) {
    res.render('signup');

}

exports.signupadd = function (req, res) {
    res.render('dashboard');

}



exports.signin = function (req, res) {

    res.render('partials/login-modal');

}

exports.dashboard = function (req, res) {

    res.render('index');

}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}