init(1200);
$('#stop').css('display', 'none');
$(".startTimer").click(function() {
  $('#CountDownTimer').css('display', 'block');
  $("#CountDownTimer").TimeCircles({ time: { Days: { show: false }, Hours: { show: false } }});
  $("#CountDownTimer").TimeCircles().rebuild();
    $("#CountDownTimer").TimeCircles().start();
    $("#CountDownTimer").TimeCircles({count_past_zero: false}).addListener(countdownComplete);
$('#start').css('display', 'none');
$('#stop').css('display', 'block');
});
$(".stopTimer").click(function() {
    $("#CountDownTimer").TimeCircles().stop();
    $('#start').css('display', 'block');
    $.mobile.changePage("#notification");
    $("#noti_head").html( "");
    $("#noti_head").html( "Not Success !");
    $("#noti_body").html( "");
    $("#noti_body").html( "You Lose");
});



function countdownComplete(unit, value, total){
    if(total<=0){
        $(this).TimeCircles().end().fadeOut();
        $(this).TimeCircles().destroy();
        //$(this).html("");
        $('#start').css('display', 'block');
        $('#stop').css('display', 'none');
        $.mobile.changePage("#notification");
        $("#noti_head").html( "");
        $("#noti_head").html( "Success !");
        $("#noti_body").html( "");
        $("#noti_body").html( "You Win");
    }
}


$("#configbtn").click(function() {
  var timer=$('input[name=radioName]:checked', '#formsetting').val();
  $("#CountDownTimer").TimeCircles().end().fadeOut();
  $("#CountDownTimer").TimeCircles().destroy();
  init(timer);
  $.mobile.changePage("#home");

  });

  function init(data_timer) {
    $("#CountDownTimer").fadeOut('slow').replaceWith('<div id="CountDownTimer" data-timer="" style="width: 280px; height: 150px; margin: auto;"></div>');
    $("#CountDownTimer").attr( "data-timer",data_timer);
  }
