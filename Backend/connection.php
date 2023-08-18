<?php 
$connection=new mysqli("localhost","root","","usersdb");
if($connection->connect_error)
{
    die("database was crashed");
}
?>