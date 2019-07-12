var authController = require('../controllers/authcontroller.js');
// var requestController = require('../controllers/requestcontroller.js/index.js');
module.exports = function (app, passport) {
    app.get('/', isLoggedIn, authController.dashboard);

    app.get('/signup', isLoggedIn, authController.signup);
    app.get('/signin', authController.signin);


    // app.post('/signup', isLoggedIn, authController.signup);


    app.post('/signup', isLoggedIn, passport.authenticate('local-signup'

        , {
            successRedirect: '/dashboard',

            failureRedirect: '/signup',
            failureFlash: true

        }

    ));


    app.get('/dashboard', isLoggedIn, authController.dashboard);
    //logout router

    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'

    }

    ));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}

