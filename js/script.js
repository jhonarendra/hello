$(document).ready(function(){
	$(".jo-show").addClass("jo-hide");
	var offsetTop = $(".jo-show").offset().top;

	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();

	var showPoint = scrollTop + windowHeight - 100;

	if(showPoint>offsetTop){
		$(".jo-show").addClass("animated bounceIn");
		$(".jo-show").removeClass("jo-hide");
	}

	$("#selengkapnya").click(function(){
	  $("html").animate({
	    scrollTop: 650
	  }, 1000);
	});

	$(window).scroll(function(){
		$(".jo-show").each(function(i){
			var offsetTop = $(this).offset().top;

			var scrollTop = $(window).scrollTop();
			var windowHeight = $(window).height();

			var delay = '0.'+i*2+'s';

			var showPoint = scrollTop + windowHeight - 100;

			if(showPoint>offsetTop){
				$(this).addClass("animated bounceIn");
				$(this).css("animation-delay", delay);
				$(this).removeClass("jo-hide");
			}
		});
	});

	var width = 0;
	$(".jo-project").each(function(i){
	  width += $(this).width()
	});
	$("#left").hover(function(){
	  $(".jo-project-wrapper").animate({
	    scrollLeft: -1000
	  }, 5000, 'linear');
	}, function(){
	  $(".jo-project-wrapper").stop()
	});
	$("#right").hover(function(){
	  $(".jo-project-wrapper").animate({
	    scrollLeft: width
	  }, 5000, 'linear');
	}, function(){
	  $(".jo-project-wrapper").stop()
	});
});


// $(document).ready(function(){
// 	$(".jo-show").addClass("jo-hide");
// 	$(window).scroll(function(){
// 		$(".jo-show").each(function(i){
// 			var offsetTop = $(this).offset().top;

// 			var value = 100;
// 			value*=i;

// 			var scrollTop = $(window).scrollTop();
// 			var windowHeight = $(window).height();

// 			var showPoint = scrollTop + windowHeight - value;

// 			if(showPoint>offsetTop){
// 				$(this).addClass("animated bounceIn");
// 				$(this).removeClass("jo-hide");
// 			}
// 		});
// 	});
// });

// $(document).ready(function(){
// 	var $window = $(window);
// 	var $aboutIcon = $("#about-icon");
// 	var $aboutImg = $("#about-img");

// 	$aboutIcon.addClass("jo-hide");
// 	$aboutImg.addClass("jo-hide");

// 	function isScrolled($elem, $window){
// 		var docViewTop = $window.scrollTop();
// 		var docViewBottom = docViewTop+$window.height();

// 		var elemTop = $elem.offset().top;
// 		var elemBottom = elemTop + $elem.height();

// 		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 	}

// 	if (isScrolled($aboutIcon, $window)) {
// 		$aboutIcon.addClass("animated bounceIn");
// 		$aboutIcon.removeClass("jo-hide");
// 	}
// 	if (isScrolled($aboutImg, $window)) {
// 		$aboutImg.addClass("animated bounceIn");
// 		$aboutImg.removeClass("jo-hide");
// 	}

// 	$(window).scroll(function(){
// 		if(isScrolled($aboutIcon, $window)){
// 			$aboutIcon.addClass("animated bounceIn");
// 			$aboutIcon.removeClass("jo-hide");
// 		}
// 		if (isScrolled($aboutImg, $window)) {
// 			$aboutImg.addClass("animated bounceIn");
// 			$aboutImg.removeClass("jo-hide");
// 		}
// 	})
// });

// $(document).ready(function(){
// 	var $window = $(window);
// 	var $elem = $("#about-icon");

// 	$elem.addClass("jo-hide");

// 	function isScrolled($elem, $window){
// 		var docViewTop = $window.scrollTop();
// 		var docViewBottom = docViewTop+$window.height();

// 		var elemTop = $elem.offset().top;
// 		var elemBottom = elemTop + $elem.height();

// 		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 	}
// 	$(window).scroll(function(){
// 		if(isScrolled($elem, $window)){
// 			$elem.addClass("animated bounceInUp");
// 			$elem.removeClass("jo-hide");
// 		}
// 	})
// });