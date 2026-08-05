<?php
include('config.php');

$name        = $_POST['name'];
$email       = $_POST['email'];
$category    = $_POST['category'];
$description = $_POST['description'];
$location    = $_POST['location'];
$raw_date    = $_POST['date_lost'];

// Convert MM/DD/YYYY text input to YYYY-MM-DD format for MySQL
$formatted_date = date('Y-m-d', strtotime($raw_date));

$sql = "INSERT INTO items (user_name, user_email, category, description, location, date_lost) 
        VALUES ('$name', '$email', '$category', '$description', '$location', '$formatted_date')";

if (mysqli_query($conn, $sql)) {
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <title>Submission Successful - Bria University</title>
        <link rel='stylesheet' href='style.css'>
    </head>
    <body>
        <div class='card-box'>
            <h2 style='color: #ff2a75;'>Report Submitted Successfully!</h2>
            <p>Thank you, <strong>" . htmlspecialchars($name) . "</strong>. Your lost report has been saved to the Bria University system.</p>
            <a href='index.html' style='color: #ff6b35; font-weight: bold;'>Go back to main page</a>
        </div>
    </body>
    </html>";
} else {
    echo "Error saving report: " . mysqli_error($conn);
}

mysqli_close($conn);
?>