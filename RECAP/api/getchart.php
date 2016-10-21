<?php
include 'connect.php';
//get car data
$sql = "SELECT * FROM `activity`";
$sqlquery=mysql_db_query($dbname, $sql);
while ($row = mysql_fetch_array($sqlquery)) {
  $act_name=$row['act_name'];
  $act_total=$row['act_total'];
$json_data[]=array(
"label"=>"$act_name",
"value"=>"$act_total",
 );//encode json
 }
 //sentback to javascript
$callback = $_GET['jsoncallback'];
$data= json_encode($json_data);
echo $callback.'('.$data.');';//format  sent json
?>