function validateForm() {
    var isValid = true;

    // Get input values
    var nameVal = document.getElementById("name").value.trim();
    var emailVal = document.getElementById("email").value.trim();
    var catVal = document.getElementById("category").value;
    var descVal = document.getElementById("description").value.trim();
    var locVal = document.getElementById("location").value.trim();
    var dateVal = document.getElementById("date_lost").value.trim();

    // Clear previous error messages
    document.getElementById("nameErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("catErr").textContent = "";
    document.getElementById("descErr").textContent = "";
    document.getElementById("locErr").textContent = "";
    document.getElementById("dateErr").textContent = "";

    // 1. Validate Name
    if (nameVal === "") {
        document.getElementById("nameErr").textContent = "Please enter your full name.";
        isValid = false;
    }

    // 2. Validate Email
    if (emailVal === "") {
        document.getElementById("emailErr").textContent = "Please enter your email.";
        isValid = false;
    } else if (emailVal.indexOf("@") === -1 || emailVal.indexOf(".") === -1) {
        document.getElementById("emailErr").textContent = "Email must contain '@' and '.'.";
        isValid = false;
    }

    // 3. Validate Category
    if (catVal === "") {
        document.getElementById("catErr").textContent = "Please select a category.";
        isValid = false;
    }

    // 4. Validate Description
    if (descVal === "") {
        document.getElementById("descErr").textContent = "Please enter item details.";
        isValid = false;
    }

    // 5. Validate Location
    if (locVal === "") {
        document.getElementById("locErr").textContent = "Please state where it was lost.";
        isValid = false;
    }

    // 6. Validate Date Format (MM/DD/YYYY)
    if (dateVal === "") {
        document.getElementById("dateErr").textContent = "Please enter the date lost.";
        isValid = false;
    } else if (dateVal.length !== 10 || dateVal.charAt(2) !== '/' || dateVal.charAt(5) !== '/') {
        document.getElementById("dateErr").textContent = "Please use MM/DD/YYYY format (e.g., 08/05/2026).";
        isValid = false;
    }

    return isValid;
}
