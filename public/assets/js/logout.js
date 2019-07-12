$(document).ready(function () {
    // Getting references to our form and inputs
    var logoutcommand = $(".logoutclass");


    // When the form is submitted, we validate there's an email and password entered
    logoutcommand.on("click", function (event) {
        $.get("/logout")
            .then(function (data) {

                window.location = ("/dashboard")
                console.log("successful login")

                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log("successful logout")
            });
    });


});