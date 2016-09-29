<?php
$host = "localhost";
$user = "root";//username database
$passwd = "";//password database
$dbname = "testmobile";
	mysql_connect($host,$user,$passwd) or die("not connect Host");
	mysql_select_db($dbname) or die("not have database");
	mysql_query('SET NAMES UTF8');
?>

