<?php
$servername = "localhost";   // XAMPP use karte ho to "localhost"
$username   = "root";        // XAMPP ka default user
$password   = "";            // XAMPP ka default password blank hota hai
$dbname     = "user_system"; // Aapke database ka naam

// Connection create karo
$conn = new mysqli($servername, $username, $password, $dbname);

// Connection check karo
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}
?>