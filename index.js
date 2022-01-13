$(document).ready(function(){
  var scroll_pos = 0;
  $(window).scroll(function(){
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 5){
      $(".navbar").css('background-color','black');
    }
    else{
      $(".navbar").css('background-color', '');
    }
  });
});
