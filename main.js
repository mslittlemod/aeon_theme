$(window).on('load', function() {
   setTimeout(function () {
		jQuery("#preloader").fadeOut(500);
	}, 500);
	setTimeout(function () {
		jQuery("#preloader").remove();
	}, 2000);

	/**** Selectbox **/
	// Iterate over each select element
	$('.selectbox').each(function () {
		// Cache the number of options
		var $this = $(this),
			numberOfOptions = $(this).children('option').length;
	    // Get all classes of the element
		var allClasses = $this.attr("class").split(" ");
		// Exclude the class "selectbox"
		var filteredClasses = $.grep(allClasses, function (value) {
			return value !== 'selectbox';
		});
	
		// Hides the select element
		$this.addClass('s-hidden');
		// Wrap the select element in a div
		$this.wrap('<div class="select"></div>');

		// Insert a styled div to sit over the top of the hidden select element
		$this.after('<div class="styledSelect ' + filteredClasses.join(' ') + ' "></div>');

		// Cache the styled div
		var $styledSelect = $this.next('div.styledSelect');

		// Show the first select option in the styled div
		$styledSelect.text($this.children('option').eq(0).text());

		// Insert an unordered list after the styled div and also cache the list
		var $list = $('<ul />', {
			'class': 'options'
		}).insertAfter($styledSelect);

		// Insert a list item into the unordered list for each select option
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		// Cache the list items
		var $listItems = $list.children('li');

		// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.styledSelect.active').each(function () {
				$(this).removeClass('active').next('ul.options').hide();
			});
			$(this).toggleClass('active').next('ul.options').toggle();
		});

		// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
		// Updates the select element to have the value of the equivalent option
		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		// Hides the unordered list when clicking outside of it
		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
		// Click event for the reset button
	$('.btn[type="reset"]').click(function() {
		// Iterate over each select element with the class "selectbox"
		$('.selectbox').each(function () {
			// Reset the selected value to the first option
			$(this).val($(this).children('option').eq(0).val());

			// Update the text in the corresponding styledSelect div
			var $styledSelect = $(this).next('div.styledSelect');
			$styledSelect.text($(this).children('option').eq(0).text());
		});
	});
				
	// Show/Hide password field
	$(".toggle-password").click(function() {

	  $(this).toggleClass("viewPassword");
	  var input = $($(this).attr("data-toggle"));
	  if (input.attr("type") == "password") {
		input.attr("type", "text");
	  } else {
		input.attr("type", "password");
	  }
	});
	// Show content-3 by default
    $(".content-3").show();
    // Hover event
    $(".chartElmt").hover(function() {
        var index = $(this).data('index');
        $(".chart-content").toggleClass('desable');		
        $("." + index).toggleClass('highlight'); 
		 $(".chartElmt").addClass('desable');
		 $(this).removeClass('desable');
    });
	$(".chartElmt").on('mouseleave', function() {
		$(".chartElmt").removeClass('desable');
	});
	
	$('div.cta-with-banner').mousemove(function(e){
	  let mouseX = e.pageX;
	  let mouseY = e.pageY;
	   $(this).children('.shape').css({
		'transform': 'translate(' + mouseX / -80 + 'px ,' + mouseY / -80 + 'px)'
	   })
	 });
	
	$(".slider").slick({
		autoplay: false,
		dots: true,
		customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data();
		return '<a class="dot" role="tab">'+(i+1)+'</a>';
				},
		appendDots: $(".slide-m-dots"),
		prevArrow:$(".prevArrow"),
		nextArrow:$(".nextArrow"),
	});
	$(".activities").slick({
		autoplay: true,
		dots: true,
		arrows: true,
		prevArrow:'<button class="slick-prev"> < </button>',
		nextArrow:'<button class="slick-next"> > </button>',
		responsive: [{ 
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			} 
		}]
	});
	$(".activity-banner").slick({
		autoplay: true,
		dots: true,
		arrows: true,
		prevArrow:'<button class="slick-prev"> < </button>',
		nextArrow:'<button class="slick-next"> > </button>',
		responsive: [{ 
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			} 
		}]
	});
	$(".activity").slick({
		autoplay: true,
		dots: false ,
		arrows: true ,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-prev"> < </button>',
		nextArrow:'<button class="slick-next"> > </button>',
		responsive: [{ 
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			} 
		}]
	});
	 $('.activity').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
      });
	$(".testomanialSlides").slick({
		autoplay: true,
		arrows: true ,
		slidesToShow: 1,
		dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: '160px',
		focusOnSelect: true,
		cssEase: 'linear',
		touchMove: true,
		prevArrow:'<button class="slick-prev"> < </button>',
		nextArrow:'<button class="slick-next"> > </button>',
		responsive: [{ 
			breakpoint: 767,
			settings: {
				centerMode: false,
				centerPadding: '60px',	
			} 
		},{ 
			breakpoint: 640,
			settings: {
				centerMode: false,
				centerPadding: '60px',	
			} 
		}]
	});	
	$(".career").slick({
		autoplay: false,
		arrows: true ,
		slidesToShow: 1,
		dots: false,
		centerMode: true,
		centerPadding: '160px',
		touchMove: true,
		prevArrow:'<button class="slick-prev"> < </button>',
		nextArrow:'<button class="slick-next"> > </button>',
		responsive: [{ 
			breakpoint: 992,
			settings: {
				centerMode: true,
				centerPadding: '60px',				
			} 
		},{
			breakpoint: 768,
			settings: {
				centerMode: true,
				centerPadding: '60px',				
			} 
		},{ 
			breakpoint: 640,
			settings: {
				centerMode: false,
				centerPadding: '60px',				
			} 
		}]
	});	
	 //skillbar
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
	
	$(function(){
		$('[id^="datepicker"]').each(function() {
			$(this).datepicker();
		});
	});
	$(document).ready(function(){
		$(".like").click(function(){
		var src = $(this).attr('src');
		var dataimg = $(this).attr('data-src');	
		var newsrc = (src== dataimg) ?  src  :  dataimg ;
		
		$(this).attr('src', newsrc );
		var newdata = (dataimg == src) ? dataimg  : src;
		$(this).attr('data-src', newdata );
		
		});
	});

});

jQuery(function($){
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 50) {
	  $("nav").addClass("fixed-top");
    } else {
	   $("nav").removeClass("fixed-top");
    }
	if ($(window).scrollTop() > 300) {
      $('#pagetop').fadeIn(400);
    } else {
      $('#pagetop').fadeOut(400);
    }
  });
});
