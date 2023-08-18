<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require 'connection.php';
    $email = $_POST["email"];
    $password = $_POST["password"];
    $username = $_POST["username"];
    $sql = "SELECT * FROM users WHERE email='$email'";
    $sonuc = mysqli_query($connection, $sql);
    if (mysqli_affected_rows($connection) > 0) {
        echo json_encode("Bu email adresi sizden önce alınmıştır başka mail adresi deneyiniz.");
    } elseif (mysqli_affected_rows($connection) == 0) {
        $sql = "INSERT INTO users (username,email,password) VALUES ('$username','$email','$password')";
        $sonuc = mysqli_query($connection, $sql);
        if ($sonuc) {
            echo json_encode("KAYIT BAŞARILI");
        } else {
            echo json_encode("KAYIT BAŞARISIZ");
        }
    }
    mysqli_close($connection);
}
