
	$(".toggle_catalog").click(function() {
	  $(this).toggleClass("on");
	  $(".hidden_catalog").slideToggle();
	});
  

    $(function() {
    $('#gallery').poptrox({
      usePopupCaption: true,
      usePopupNav: true,
      popupPadding: 0
    });
  });
  
  	$(".trigger").click(function(e) {
	  e.preventDefault();
	  $(this).prev().toggleClass("read_open");
	  e.poptrox().css('display: none');
	});