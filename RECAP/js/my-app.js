$( document ).ready(function() {
init();
});
function init(){
  checklogin();
  $('#re-password').css('display', 'none');//not show
  $('#comfirm-regis').css('display', 'none');//not show
  $('#check_agree1').css('display', 'none');//not show
  $('#gender').css('display', 'none');//not show
  $('#age').css('display', 'none');//not show
  $('#cancel').css('display', 'none');//not show
$(document).ready(function(){
      $('.carousel').carousel();
    });
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({full_width: true});
  var test1="height: "+$(document).height()+"px;";
  var test=$(".carousel.carousel-slider.center.initialized").attr('style',test1);
}

function checklogin() {
if (localStorage.user_name) {
var username = localStorage.user_name;
$.mobile.changePage("#homepage");
var content='welcome ! '+username;
$("#appview").append(content);
  }
}


$(document).on("click", "#m-menu", function() {
  $("#appview").html("");
  var content='<ul data-role="listview" class="ui-listview"> \
  <li><a href="#" id="profil" class="ui-btn ui-btn-icon-right ui-icon-carat-r">profile</a></li>   \
  <li><a href="#" id="logout" class="ui-btn ui-btn-icon-right ui-icon-carat-r">logout</a></li>   \
  </ul>';
  $("#appview").append(content);//apend to add content
});//event click logout


$(document).on("click","#profil",function() {
  $("#appview").html("");
        
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  var content='<ul id="slide-out" class="side-nav">\
    <li><div class="userView">\
      <img class="background" src="images/capture.png">\
      <a href="#!user"><img class="circle" src="images/logo.png"></a>\
      <a href="#!name"><span class="white-text name">John Doe</span></a>\
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>\
    </div></li>\
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>\
    <li><a href="#!">Second Link</a></li>\
    <li><div class="divider"></div></li>\
    <li><a class="subheader">Subheader</a></li>\
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>\
  </ul>\
  <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>\
  ';
   $("#appview").append(content);//apend to add content
});


$(document).on("click", "#logout", function() {
localStorage.removeItem("user_name");
$.mobile.changePage("#home");
});//event click logout

$(document).on("click", "#regis", function() {
  $('#re-password').css('display', 'block');//show
  $('#comfirm-regis').css('display', 'block');//show
  $('#gender').css('display', 'block');//show
  $('#age').css('display', 'block');//show
  $('#check_agree1').css('display', 'block');//show
  $('#login').css('display', 'none');//not show
  $('#regis').css('display', 'none');//not show
  $('#cancel').css('display', 'block');//not show
  
});//event click

$(document).on("click", "#cancel", function() {
  $('#re-password').css('display', 'none');//not show
  $('#comfirm-regis').css('display', 'none');//not show
  $('#check_agree1').css('display', 'none');//not show
  $('#gender').css('display', 'none');//not show
  $('#age').css('display', 'none');//not show
  $('#cancel').css('display', 'none');//not show
  $('#login').css('display', 'block');//not show
  $('#regis').css('display', 'block');//not show
  
});//event click


$(document).on("click", "#comfirm-regis", function() {
    var username=$("#username").val();//get value username
    var password=$("#password").val();//get value password
    var re_password=$("#re-password").val();//get value re password
    var gender=$('input[name=radio1]:checked').val();//get value radio button of gender
    var age=$("#age").val();//get value age
    var check_agree=$('#check_agree').is(':checked');
if(password==re_password && check_agree==true){
    var pack_data={username:username,password:password,gender:gender,age:age};
    var url='http://127.0.0.1/testmobile/api/regis.php?jsoncallback=?';
    $.getJSON( url, {
      pack_data:pack_data,
      format: 'json'
      })
        .done(function( data ) {
    $.each(data, function(i, field){
    //sent Complete any thing
var msg=data[i].msg;
var username=data[i].username;
if(msg=="yes"){
init(); //hide comfirm-regis go to login
$('#login').css('display', 'block');//show when success regis
$('#regis').css('display', 'block');//not show
alert("success")
}else{
alert("have username");
}
  });//each
});//Complete sent data
}//if check data
else{
alert('Please Complete the fields');
}//if check data
});//event click regis


$(document).on("click", "#login", function() {
  var username=$("#username").val();//get value username
  var password=$("#password").val();//get value password
  var gender=$("#gender").val();//get value gender
  var age=$("#age").val();//get value age
  var pack_data={username:username,password:password,gender:gender,age:age};
  var url='http://127.0.0.1/testmobile/api/login.php?jsoncallback=?';
  $.getJSON( url, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
  $.each(data, function(i, field){
  //sent Complete any thing
  var msg=data[i].msg;
  if(msg=="yes"){
$.mobile.changePage("#homepage");//when success login
localStorage.user_name = username;
var content='welcome ! '+username;
$("#appview").append(content);
  }else{
  alert("Error! the username or password doesnt match.");
  }
  });//each
  });//Complete sent data
});//event click  login



$("#notif").click(function() {
    $("#noti_head").html( "");
    $("#noti_head").html( "Fail !");
    $("#noti_body").html( "");
    $("#noti_body").html( "You Lose");
    $.mobile.changePage("#notification");
  });

$("#terms").click(function() {
    $("#noti_head").html( "");
    $("#noti_head").html( "Terms & Conditions");
    $("#noti_body").html( "");
    $("#noti_body").html( "Please read the Terms and Conditions of Put It App carefully before submitting your account, by fill the form, we keep the data follow the questionaire Developed by Yaowaluck Promdee, Ridlo Putuismaya, Advisor by Sumonta Kasemvilas Ph.D .Computer Science, KKU");
    $.mobile.changePage("#home");
  });


// navbar page

$("#configbtn").click(function() {
  var timer=$('input[name=radioName]:checked', '#formsetting').val();
  $("#CountDownTimer").TimeCircles().end().fadeOut();
  $("#CountDownTimer").TimeCircles().destroy();
  init(timer);
  $.mobile.changePage("#homepage");

  });


//end of seting navbar




$(document).on("click", "#btn_check", function() {
$("#appview").html("");
var content=$(this).attr('car_id');
$("#appview").append(content);
});//event click  btn_check



//chart
$(document).on("click", "#result", function() {
  var content='<ul data-role="listview" class="ui-listview"> \
   <li><a href="#" id="time" class="ui-btn ui-shadow ui-corner-all">Time</a></li>   \
   <li><a href="#" id="log" class="ui-btn ui-shadow ui-corner-all">Log</a></li>   \
   </ul>';
   $("#appview").append(content);

  var pack_data={username:"test"};
  var url='http://127.0.0.1/testmobile/api/getchart.php?jsoncallback=?';
  $.getJSON( url, {
    pack_data:pack_data,
    format: 'json'
    })
      .done(function( data ) {
  chart(data);
});
});//event click  result
function chart(data) {
  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    dataSource: {
    "chart": {
        "caption": "Summary",
        "bgcolor": "FFFFFF",
        "showvalues": "1",
        "showpercentvalues": "1",
        "showborder": "0",
        "showplotborder": "0",
        "showlegend": "1",
        "legendborder": "0",
        "legendposition": "bottom",
        "enablesmartlabels": "1",
        "use3dlighting": "0",
        "showshadow": "0",
        "legendbgcolor": "#CCCCCC",
        "legendbgalpha": "20",
        "legendborderalpha": "0",
        "legendshadow": "0",
        "legendnumcolumns": "3",
        "palettecolors": "#E74C3C,#8E44AD,#2E86C1,#1ABC9C,#F1C40F,#34495E"
    },
    "data": data
}
}
);
    fusioncharts.render();
});
$("#appview").html("");
var content='<div id="chart-container"></div>';
$("#appview").append(content);

}

$(document).on("click", "#help", function() {
  $("#appview").html("");
  var content='<div style="text-align:center;" href="#one!">\
        <h5>Help</h5>\
        <p>Thank you for using our app.</p>\
        <p>if you have any problem, please send us a note.</p>\
        <p>Contact Us.</p>\
        <p>Ridlo Putuismaya.</p>\
      </div>';
  $("#appview").append(content);//apend to add content
});//event click logout