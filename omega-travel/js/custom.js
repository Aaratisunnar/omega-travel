//custom slider

$(document).ready(function($){
  $('.testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
	});

  	$('#toggle-btn').click(function(){
  		$('#toggle-btn').toggleClass('active');
  		$('body').toggleClass('open-menu')
  	});

  	
  	/* When we click on navigation link it should close the menu and
  	it should change the Btn close menu again to Hamberger menu-----*/
  	
  	$('.main-navigation li a').click(function(){
  		$('#toggle-btn').toggleClass('active');
  		$('body').removeClass('open-menu')
  	});
});


//To the top btn js
$(document).ready(function($){
	$(window).scroll(function(){
	  if($(this).scrollTop() > 40) {
		$('.to-top').fadeIn();
	  }   else{
		$('.to-top').fadeOut();
	  }
	});

  	$('.to-top').click(function(){
  		$('html , body').animate({scrollTop: 0}, 200);
  	});
});
