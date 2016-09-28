<?php
$host = "localhost";
$user = "root";//username database
$passwd = "";//password database
$dbname = "testmobile";
	mysqli_connect($host,$user,$passwd) or die("not connect Host");
	mysqli_select_db($dbname) or die("not have database");
	mysqli_query('SET NAMES UTF8');
?>

