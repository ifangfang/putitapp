<?php
include 'connect.php';
//get car data
$sql = "SELECT * FROM `cars`";
$sqlquery=mysql_db_query($dbname, $sql);
while ($row = mysql_fetch_array($sqlquery)) {
  $car_name=$row['car_name'];
  $total=$row['total'];
$json_data[]=array(
"label"=>"$car_name",
"value"=>"$total",
 );//encode json
 }
 //sentback to javascript
$callback = $_GET['jsoncallback'];
$data= json_encode($json_data);
echo $callback.'('.$data.');';//format  sent json
?>