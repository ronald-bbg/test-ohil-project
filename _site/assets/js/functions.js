$('.vha-video__play-action').magnificPopup({
    type: 'iframe', 
    
    iframe: {
       markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '<div class="mfp-title">Some caption</div>'+
                '</div>'
    }
});


$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive:{
      0: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 6,
        nav: true,
        loop: true
      }
    }
  });
});

var amountScrolled = 200;

var plus = '/assets/uswds/img/usa-icons/expand_more-yellow.svg';
var minus = '/assets/uswds/img/usa-icons/expand_less-yellow.svg';

$('.usa-nav__primary li:nth-child(1)').on("click", function() {
  if ($('.about-dropdown').attr('src') === plus) {
    $('.about-dropdown').attr('src', minus);
  } else {
    $('.about-dropdown').attr('src', plus)
  }
});

$('.usa-nav__primary li:nth-child(2)').on("click", function() {
  if ($('.portfolio-dropdown').attr('src') === plus) {
    $('.portfolio-dropdown').attr('src', minus);
  } else {
    $('.portfolio-dropdown').attr('src', plus)
  }
});

$(window).scroll(function () {
	'use strict';
	if ($(window).scrollTop() > amountScrolled) {
		$('.back-to-top::before').fadeIn('slow');
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top::before').fadeOut('slow');
		$('a.back-to-top').fadeOut('slow');
	}
});

$('.usa-footer-return-to-top a,.back-to-top, .topper').click(function () {
	'use strict';
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});

$(".smooth-scroll").on('click', function (event) {
	'use strict';
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 400, function () {

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} // End if
});


$('.scroll').on('click',function(e) {
	e.preventDefault();
	var offset = 0;
	var target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
		// window.location.hash = target;
	});
});