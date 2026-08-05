<?php
// Database login credentials
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "lost_found_db";

// Create connection to MySQL
$conn = mysqli_connect($host, $user, $pass, $dbname);

// If connection fails, stop the code and show an error
if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>