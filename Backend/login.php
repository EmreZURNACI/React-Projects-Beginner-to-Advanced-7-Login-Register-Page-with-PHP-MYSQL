<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require 'connection.php';
    $email=$_POST["email"];
    $password=$_POST["password"];
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $sonuc = mysqli_query($connection, $sql);
    if (mysqli_affected_rows($connection) > 0) {
        echo json_encode("GİRİŞ BAŞARILI");
    } else {
        echo json_encode("GİRİŞ BAŞARISIZ");
    }
    mysqli_close($connection);
}
?>