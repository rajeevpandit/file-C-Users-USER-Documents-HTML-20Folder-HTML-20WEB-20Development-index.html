<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    // Database se user nikalna
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Password verify karna
        if (password_verify($pass, $user['password'])) {
            // Session save
            $_SESSION['email'] = $user['email'];

            // Redirect welcome page
            header("Location: welcome.html");
            exit();
        } else {
            echo "❌ Invalid password!";
        }
    } else {
        echo "❌ No user found with this email!";
    }
}
$conn->close();
?>