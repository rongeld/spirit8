<?php

$recepient = "andrew.zakrevskiy@gmail.com";
$sitename = "Portfolio";

$name = trim($_POST["name-input"]);
$email = trim($_POST["email-input"]);
$text = trim($_POST["user-message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nEmail: $email \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
