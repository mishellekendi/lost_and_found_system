<?php
// 1. Connect to the database using config.php
include('config.php');

// 2. Collect data sent from the HTML form fields
$name        = $_POST['name'];
$email       = $_POST['email'];
$category    = $_POST['category'];
$description = $_POST['description'];
$location    = $_POST['location'];
$date_lost   = $_POST['date_lost'];

// 3. Create the SQL command to save data into the database table
$sql = "INSERT INTO items (user_name, user_email, category, description, location, date_lost) 
        VALUES ('$name', '$email', '$category', '$description', '$location', '$date_lost')";

// 4. Send the SQL command to MySQL and check if it worked
if (mysqli_query($conn, $sql)) {
    // If successful, show this page to the user
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Submission Successful</title>
        <link rel='stylesheet' href='style.css'>
    </head>
    <body>
        <div class='card-box'>
            <h2 style='color: green;'>Report Submitted Successfully!</h2>
            <p>Thank you, <strong>" . $name . "</strong>. Your lost report has been saved to our system.</p>
            <a href='index.html'>Go back to main page</a>
        </div>
    </body>
    </html>";
} else {
    // If an error happens, show the error message
    echo "Error saving report: " . mysqli_error($conn);
}

// 5. Close the database connection
mysqli_close($conn);
?>