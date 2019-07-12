var requestController = require('../controllers/requestcontroller.js');

module.exports = function (app, passport) {
    app.get('/requests', requestController.viewrequest);
    app.get('/addrequest', requestController.addrequestpage);
    app.post('/addrequest', requestController.addrequest)



    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}
