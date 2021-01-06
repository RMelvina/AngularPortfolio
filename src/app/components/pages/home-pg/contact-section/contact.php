<?php
if($_POST["message"]) {
    mail("melvinanraj@gmail.com", "Form to email message",
     $_POST["message"], "From: an@email.address");
}
?>