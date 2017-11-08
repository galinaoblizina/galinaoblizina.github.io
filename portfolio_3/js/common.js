$(document).ready(function() {


  function initSize() {

  $(".box_mnu .panel-heading ").each(function() {
     var ph = $(this).height() + 3;
     var pdt = $(this).find(".dropdown-toggle");
     pdt.height(ph);
  });

  $(".till_item .tc").each(function() {
  	var path = $(this).parent().height();
  	$(this).height(path);
  });

   $(".ben_item").each(function() {
    $(this).height(135);
   }); 

   $(".aside").each(function() {
    var aside = $(".aside_carousel_count").height() + 15;
    $(this).height(aside);
   });

  };

  initSize();

  $(window).resize(function() {
  	initSize();
  });



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});


  	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
