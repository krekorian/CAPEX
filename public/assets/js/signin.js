$(document).ready(function () {
    // Getting references to our form and inputs
    var signinForm = $(".signin");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    signinForm.on("click", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email) {
            emailInput.css("border", "solid 1px red");
            $("#username-feedback").text("Please enter a username");
            return;
        }

        if (!userData.password) {
            passwordInput.css("border", "solid 1px red");
            $("#password-feedback").text("Please enter a password");
            return;
        }
        // If we have an email and password we run the signinUser function and clear the form
        signinUser(userData.email, userData.password);
        console.log(userData.email);
        console.log(userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // signinUser does a post to our "api/signin" route and if successful, redirects us the the members page
    function signinUser(email, password) {
        $.post("/signin", {
            email: email,
            password: password
        })
            .then(function (data) {

                window.location = ("/dashboard")
                console.log("successful login")
                console.log(data)
                // If there's an error, log the error
            })
            .catch(function (err) {
                $("#password-feedback").text("Incorrect Username or Password");
            });
    }
});