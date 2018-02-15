Template.frFooter.onRendered(function () {
    $(document).ready(function(){
        $('.footer_arrow').click(function(){
          $("footer").toggleClass("footer_close");
          $(this).parents('footer').find(".footer_arrow span").toggleClass('fa-angle-double-down fa-angle-double-up');
        });

     	$(function () { 
			$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
		}); 

     	//progress_bar
		// $( window ).scroll(function() { 
		// if($( window ).scrollTop() > 10){ // scroll down abit and get the action 
		$(".progress-bar").each(function(){
			each_bar_width = $(this).attr('aria-valuenow');
			$(this).width(each_bar_width + '%');
		});

        
      });
    });