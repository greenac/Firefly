


$(window).scroll(function() {
	$('#about_container').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideUp");
		}
	});
});

$(window).scroll(function() {
	$('#instructor_container').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("fadeIn");
		}
	});
});

$('#lmore').on('click',function(){
	$('html, body').animate({
    scrollTop: $("#about_banner").offset().top
}, 700);
}); 


$('.up').on('click',function(){
	$('html, body').animate({
    scrollTop: $("#signup_banner").offset().top
}, 3000);
}); 