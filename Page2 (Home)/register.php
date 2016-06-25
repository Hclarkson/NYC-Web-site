<?php
include('connect.php');
$form_name = $_POST['name'];
$form_email = $_POST['email'];
$query = 'SELECT * FROM subscribers WHERE name="' .$form_name. '";';

$result = mysqli_query($con, $query);
if(mysqli_num_rows($result) == 0) {
    $query = 'INSERT INTO subscribers (name, email) VALUES ("'.$form_name.'","'.$form_email.'")';
        if(mysqli_query($con, $query)) {
            echo "registered";
        }
    } else {
        echo "already exists";
    }

header('Location: register.php');
?>
