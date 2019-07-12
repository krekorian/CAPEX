var exports = module.exports = {}
var Request = require('../models');


exports.viewrequest = function (req, res) {
    res.render('requests/requests');

}

exports.addrequestpage = function (req, res) {
    res.render('requests/requests-form');

}

exports.addrequest = function (req, res) {
    console.log(req.body);
    // res.json(req);
    // res.json({
    //     "bearingCost": req.body.bearingCost,
    //     "requestType": req.body.requestType,
    //     "objective": req.body.objective
    // });
    // res.json({ "OK": "OK" });

    Request.requests.create({

        bearingCost: "LAX",
        requestType: "purchase",
        objective: "new computer for manager"

    }).then(res.json({ "OK": "OK created" }))
        .catch(err => console.log(err));

}