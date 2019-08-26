<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'ffpr2015@gmail.com';
$mail->Password = 'Posmishka1999';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('ffpr2015@gmail.com');
$mail->addAddress('serhiichudnivets@gmail.com');
$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = $name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ';
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>