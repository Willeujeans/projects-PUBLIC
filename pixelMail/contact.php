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
$to = $_POST[ 'emailTo' ];
$title = $_POST[ 'title' ];
$canvasResult = $_POST[ 'result' ];

$bodyFinished .= '<html><head><style>';
$bodyFinished .= 'section:hover span{display:none;}';
$bodyFinished .= '</style></head><body>';
$bodyFinished .= strval( $canvasResult );
$bodyFinished .= '</body></html>';

$headers = $_POST[ 'emailFrom' ];
$headers = 'MIME-Version: 1.0';
$headers = 'Content-type: text/html; charset=iso-8859–1';
mail( $to, $title, $bodyFinished, $headers );
echo "SENT " . "TO: " . $to;
?>
</body>
