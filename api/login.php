<?php
include 'connect.php';
$pack_data=$_GET['pack_data'];//recive pack_data array type
$username=$pack_data['username'];//create variable username
$password=$pack_data['password'];//create variable password
$gender=$pack_data['gender'];//create variable password
$age=$pack_data['age'];//create variable password

//check data have username
$sql = "select * from user where  username='$username' and password='$password' ";
$sqlquery=mysql_db_query($dbname, $sql);
$numrow = mysql_num_rows($sqlquery);
if($numrow ==1){
  $msg="yes";
}else{
  $msg="no";
}
$json_data[]=array(
"msg"=>"$msg",
 );//encode json
 //sentback to javascript
$callback = $_GET['jsoncallback'];
$data= json_encode($json_data);
echo $callback.'('.$data.');';//format  sent json
?>