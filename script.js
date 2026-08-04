// =========================================================
// FEATURE 1: LIVE CHARACTER COUNTER
// =========================================================
// Get the description text box and the small text display
var descBox = document.getElementById("description");


// =========================================================
// FEATURE 2: SHOW / HIDE GALLERY PICTURES
// =========================================================
function toggleGallery() {
    var gallery = document.getElementById("pictureContainer");

    if (gallery.style.display === "none") {
        gallery.style.display = "flex";
    } else {
        gallery.style.display = "none";
    }
}


// =========================================================
// FEATURE 3: FORM VALIDATION
// =========================================================
function validateForm() {
    // Flag variable to track if all fields are valid
    var isValid = true;

    // Get input values from HTML form fields
    var nameVal = document.getElementById("name").value.trim();
    var emailVal = document.getElementById("email").value.trim();
    var catVal = document.getElementById("category").value;
    var descVal = document.getElementById("description").value.trim();
    var locVal = document.getElementById("location").value.trim();
    var dateVal = document.getElementById("date_lost").value;

    // Clear previous error messages before checking again
    document.getElementById("nameErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("catErr").textContent = "";
    document.getElementById("descErr").textContent = "";
    document.getElementById("locErr").textContent = "";
    document.getElementById("dateErr").textContent = "";

    // 1. Validate Name (Cannot be empty)
    if (nameVal === "") {
        document.getElementById("nameErr").textContent = "Please enter your full name.";
        isValid = false;
    }

    // 2. Validate Email (Cannot be empty AND must contain '@' and '.')
    if (emailVal === "") {
        document.getElementById("emailErr").textContent = "Please enter your email.";
        isValid = false;
    } else if (emailVal.indexOf("@") === -1 || emailVal.indexOf(".") === -1) {
        document.getElementById("emailErr").textContent = "Email must contain '@' and '.'.";
        isValid = false;
    }

    // 3. Validate Category (Must choose an option)
    if (catVal === "") {
        document.getElementById("catErr").textContent = "Please select a category.";
        isValid = false;
    }

    // 4. Validate Description (Cannot be empty)
    if (descVal === "") {
        document.getElementById("descErr").textContent = "Please enter item details.";
        isValid = false;
    }

    // 5. Validate Location (Cannot be empty)
    if (locVal === "") {
        document.getElementById("locErr").textContent = "Please state where it was lost.";
        isValid = false;
    }

    // 6. Validate Date (Cannot be empty)
    if (dateVal === "") {
        document.getElementById("dateErr").textContent = "Please select the date lost.";
        isValid = false;
    }

    // If isValid is false, submission is blocked. If true, PHP processes the form.
    return isValid;
}