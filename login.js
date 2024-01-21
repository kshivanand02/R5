function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your login logic here
    console.log("Login clicked. Username: " + username + ", Password: " + password);
}

function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Add your signup logic here
    console.log("Sign Up clicked. New Username: " + newUsername + ", New Password: " + newPassword);
}
