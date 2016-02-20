$(document).ready(function(){
  $('.slider').slider({interval: 9000});
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('#edu-links a').click(function(){
  	if(!$(this).hasClass('active')){
		$('#edu-links div').slideUp();
		$('#edu-links a').removeClass('active');
  		$(this).addClass('active');
  		$($(this)[0].nextElementSibling).slideDown();
  	}
  });
  	
});
jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop() > 50){
        jQuery('nav').addClass('scrolled');
    }else{
        jQuery('nav').removeClass('scrolled');
    }
});