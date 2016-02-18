$(document).ready(function(){
  $('.slider').slider({interval: 9000});
  $(".button-collapse").sideNav();
});
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() > 50){
        jQuery('nav').addClass('scrolled');
    }else{
        jQuery('nav').removeClass('scrolled');
    }
});