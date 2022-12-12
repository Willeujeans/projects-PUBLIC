<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Contact Me</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<style>
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background: black;
    color: white;
    font-family: roboto, sans-serif;
}
</style>
</head>
<body>
<?php
$to = 'willeujeans@gmail.com';
$from = $_POST[ 'userEmail' ];
$title = "Commission Request"
$body = $_POST[ 'discription' ];
$body .= "\r\n"
$body .= $from;
mail( $to, $title, $body, $headers );
echo "Commission Sent to " . $to;
?>
</body>
