<?php if(isset($_POST) && isset($_POST['user_name']) && isset($_POST['user_phone'])){

    $recepients = 'gevisdigitalmarketing@gmail.com';
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $subject = 'New Lead';
    $message = '<table><tr><td>Lead:</td><td>Name</td><td>Phone</td></tr><tr><td>#</td><td>'.$name.'</td><td>'.$phone.'</td></tr></table>';
    $headers  = "From: Landing < gevisdigitalmarketing@gmail.com >\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 1\n"; // Urgent message!
    $headers .= "CC: gevisdigitalmarketing@gmail.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $result = mail($recepients, $subject, $message, $headers);
}else{
    die('sorry');
}

?>