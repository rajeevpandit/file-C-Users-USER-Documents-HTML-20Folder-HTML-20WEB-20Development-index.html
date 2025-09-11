<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    // Password encrypt करके save करना
    $hash = password_hash($pass, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hash')";

    if ($conn->query($sql) === TRUE) {
        echo "✅ Signup successful! <a href='index.html'>Login here</a>";
    } else {
        echo "❌ Error: " . $conn->error;
    }
}
$conn->close();

?>