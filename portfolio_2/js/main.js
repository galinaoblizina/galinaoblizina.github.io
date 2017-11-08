$(function() {


	// выравнивание Основные направления услуг
	function heightses() {
	$(".s_direct .item_vertical p").height('auto').equalHeights();
	$(".carousel_text").height('auto').equalHeights();
	$(".testimonials_head").height('auto').equalHeights();
	$(".testimonials_desc").height('auto').equalHeights();
	}

	$(window).resize(function() {
   heightses();
	});

  heightses();



	$(".carousel_brands").owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:2,
				},
				768:{
						items:2,
				},
				992:{
						items:3,
				},
				1200:{
						items:4,
				}
		}
	});

		$(".caruosel_eq").owlCarousel({
		loop: true,
		responsive: {
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:2,
				},
				768:{
						items:2,
				},
				992:{
						items:3,
				},
				1200:{
						items:4,
				}
		}
	});



	$(".toggle_menu").click(function() {
	  $(this).toggleClass("on");
	  $(this).parent().next().next().find(".main_menu").slideToggle();
	  return false;
	});

  $(".main_foot .toggle_menu").click(function() {
     $("html, body").animate({scrollTop: $(document).height() + 200}, "slow");
     return false;
  });



  $("body").on("click", ".top", function() {
     $("html, body").animate({scrollTop: 0}, "slow");
  });

  $("body").append('<div class="top"><i class="fa fa-angle-double-up"></i>');  



	$(".mouse_icon").click(function() {
	  $("html, body").animate({
	    scrollTop : $(".s_adv").offset().top
	  }, 800);
	});


	$(".s_adv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s_adv_item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s_adv_item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});





  $(".portfolio_item").each(function(e) {

		var th = $(this);

		th.attr("href", "#portfolio_img_" + e)
			.find(".portfolio_popup")
				.attr("id", "portfolio_img_" + e);

	});

	$(".portfolio_item, a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

  $("a[href='#callback']").click(function() {
    var dataForm = $(this).data("form");
    var dataText = $(this).data("text");
    $(".form_callback h4").text(dataText);
    $(".form_callback [name=admin-data]").val(dataForm);

  });



$('.mfp_gallery').each(function() {
  $(this).magnificPopup({
  delegate: 'a',
	mainClass: 'mfp-zoom-in',
	type: 'image',
	tLoading: '',
	gallery: {
		enabled:true,
	},
	removalDelay: 300,
	callbacks: {
		beforeChange: function() {
			this.items[0].src = this.items[0].src + '?=' + Math.random(); 
		},
		open: function() {
			$.magnificPopup.instance.next = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
			}
			$.magnificPopup.instance.prev = function() {
				var self = this;
				self.wrap.removeClass('mfp-image-loaded');
				setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
			}
		},
		imageLoadComplete: function() { 
			var self = this;
			setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
		}
	}
 });
});





	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Replace all SVG images with inline SVG
	$('img.img_svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});





	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change mail.php
			data: th.serialize()
		}).done(function() {
			$(".form_callback .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".form_callback .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
 
 
 $(window).scroll(function() {
   if($(this).scrollTop() > $(this).height()) {
   	 $(".top").addClass("active");
   }
   else {
     $(".top").removeClass("active");
   }
 });


});