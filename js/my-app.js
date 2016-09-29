function init(){
  $('#re-password').css('display', 'none');//not show
  $('#comfirm-regis').css('display', 'none');//not show
  $('#check_agree1').css('display', 'none');//not show
  $('#gender').css('display', 'none');//not show
  $('#age').css('display', 'none');//not show

}
init();
$(document).on("click", "#regis", function() {
  $('#re-password').css('display', 'block');//show
  $('#comfirm-regis').css('display', 'block');//show
  $('#gender').css('display', 'block');//show
  $('#age').css('display', 'block');//show
  $('#check_agree1').css('display', 'block');//show
  $('#login').css('display', 'none');//not show
  $('#regis').css('display', 'none');//not show
  
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
    var url='http://127.0.0.1/putitapp/api/regis.php?jsoncallback=?';
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
  var url='http://127.0.0.1/putitapp/api/login.php?jsoncallback=?';
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
var content='welcome ! '+username;
$("#appview").append(content);
  }else{
  alert("Error! the username or password doesnt match.");
  }
  });//each
  });//Complete sent data
});//event click  login

$(document).on("click", "#agenda", function() {
$("#appview").html("");
var content='<ul data-role="listview"> \
<li><a href="#">Acura</a></li>   \
<li><a href="#">Audi</a></li>  \
<li><a href="#">BMW</a></li>   \
<li><a href="#">Cadillac</a></li>   \
<li><a href="#">Ferrari</a></li>  \
</ul>';
$("#appview").append(content);
});//event click  agenda

$(document).on("click", "#process", function() {
$("#appview").html("");
var content='<h2>Process </h2> \
<img src="https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/2092646/dog_walkcycle.gif" alt="process" />   \
';
$("#appview").append(content);
});//event click  process


// navbar page

$("#configbtn").click(function() {
  var timer=$('input[name=radioName]:checked', '#formsetting').val();
  $("#CountDownTimer").TimeCircles().end().fadeOut();
  $("#CountDownTimer").TimeCircles().destroy();
  init(timer);
  $.mobile.changePage("#homepage");

  });


//end of seting navbar

$(document).on("click", "#agenda", function() {
$("#appview").html("");
var content='<ul data-role="listview" class="ui-listview"> \
<li class="ui-first-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Acura</a></li>   \
<li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Audi</a></li>  \
<li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">BMW</a></li>   \
<li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Cadillac</a></li> \
<li class="ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">Ferrari</a></li>  \
</ul>';
$("#appview").append(content);//apend to add content
});//event click  agenda

$(document).on("click", "#btn_check", function() {
$("#appview").html("");
var content=$(this).attr('car_id');
$("#appview").append(content);
});//event click  btn_check


$(document).on("click", "#process", function() {
$("#appview").html("");
var content='<img src="http://www.ikea.com/us/en/images/products/korken-jar-with-lid__0131001_PE285442_S4.JPG" style="width:50px;">';
$("#appview").append(content);
});//event click  agenda



$(document).on("click", "#result", function() {
    FusionCharts.ready(function(){
      var fusioncharts = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-container',
      width: '100%',
      dataSource: {
      "chart": {
          "caption": "Result of your Quality",
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
          "palettecolors": "#f8bd19,#e44a00,#008ee4,#33bdda"
      },
      "data": [
          {
              "label": "Study",
              "value": "25"
          },
          {
              "label": "Work",
              "value": "25"
          },
          {
              "label": "Sleep",
              "value": "20"
          },
          {
              "label": "Focus",
              "value": "30"
          }
      ]
  }
  }
  );
      fusioncharts.render();
  });

$("#appview").html("");
var content='<div id="chart-container"></div>';
$("#appview").append(content);
});//event click  result


