<?php
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$formcontent=" From: $name \n Email: $email \n Comment: $comment \n";
$recipient = "e1500943@edu.vamk.fi";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You, We will get back to you ASAP!" . " \n" . "<a href='game.html'>home</a>";
?>
