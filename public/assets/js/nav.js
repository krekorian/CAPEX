$(document).ready(function () {
    // Getting references to our form and inputs
    var taskRequest = $(".task-request");
    var addRequest = $(".add-request");
    var showDashboard = $(".show-dashboard");


    // When the form is submitted, we validate there's an email and password entered
    taskRequest.on("click", function (event) {
        $.get("/requests")
            .then(function (data) {

                window.location = ("/requests")
                console.log("successful redirect")

                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log("couoldn't redirect")
            });
    });

    addRequest.on("click", function (event) {
        $.get("/addrequest")
            .then(function (data) {

                window.location = ("/addrequest")
                console.log("successful redirect addrequest")

                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log("couoldn't redirect")
            });
    });

    showDashboard.on("click", function (event) {
        $.get("/dashboard")
            .then(function (data) {

                window.location = ("/dashboard")
                console.log("successful redirect addrequest")

                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log("couoldn't redirect")
            });
    });
});