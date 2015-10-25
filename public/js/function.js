$(document).ready(function(){

	$('.button-collapse').sideNav({ //sideNav functionality
		menuWidth: 200,
		closeOnClick: true});

	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

}); //end ready