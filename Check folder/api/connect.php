<?php
$host = "localhost";
$user = "balldeec_mobile";//username database
$passwd = "1234567890";//password database
$dbname = "balldeec_mobile";
	mysql_connect($host,$user,$passwd) or die("not connect Host");
	mysql_select_db($dbname) or die("not have database");
	mysql_query('SET NAMES UTF8');
?>

