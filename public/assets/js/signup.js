$(document).ready(function () {
    // Getting references to our form and input
    var signUpButton = $(".signups");
    var firstnameInput = $("input#firstname-input");
    var lastnameInput = $("input#lastname-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");



    // Check if emails match each other
    signUpButton.on("click", function (event) {
        // Replace all alerts with modals
        console.log("entering signUpButton.on(");
        var userData = {
            firstname: firstnameInput.val().trim(),
            lastname: lastnameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.firstname || !userData.email || !userData.password) {
            return alert("Please don't leave fields blank");
        }

        // If we have an email and password, run the signUpUser function
        signUpUser(userData.firstname, userData.lastname, userData.email, userData.password);
        console.log("initializing the app")
        emailInput.val("");
        passwordInput.val("");
        firstnameInput.val("");
        lastnameInput.val("");

    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstname, lastname, email, password) {
        console.log("Entering signup user function")
        $.post("/signup", {
            email: email,
            firstname: firstname,
            lastname: lastname,

            password: password
        }).then(function (data) {
            console.log(data)
            if (data.duplicateUser) {
                // Replace with Modal
                alert("Sorry, that username has been taken");
            } else {
                console.log("redirecting the window")
                window.location = ("/dashboard")
            }
        }).catch(function (err) {
            console.log(err);
        });
    }

});