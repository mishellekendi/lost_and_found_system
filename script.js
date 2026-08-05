function validateForm() {
    var isValid = true;

    var nameVal = document.getElementById("name").value.trim();
    var emailVal = document.getElementById("email").value.trim();
    var catVal = document.getElementById("category").value;
    var descVal = document.getElementById("description").value.trim();
    var locVal = document.getElementById("location").value.trim();
    var dateVal = document.getElementById("date_lost").value.trim();

    document.getElementById("nameErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("catErr").textContent = "";
    document.getElementById("descErr").textContent = "";
    document.getElementById("locErr").textContent = "";
    document.getElementById("dateErr").textContent = "";

    if (nameVal === "") {
        document.getElementById("nameErr").textContent = "Please enter your full name.";
        isValid = false;
    }

    if (emailVal === "") {
        document.getElementById("emailErr").textContent = "Please enter your email.";
        isValid = false;
    } else if (emailVal.indexOf("@") === -1 || emailVal.indexOf(".") === -1) {
        document.getElementById("emailErr").textContent = "Email must contain '@' and '.'.";
        isValid = false;
    }

    return isValid;
}
