Template.frAppointmentListing.onRendered(function () {
    $(document).ready(function(){
        $(".sideOverlay").each(function (e) {
            $(this).bind("click", function (e) {
                var id = $(e.currentTarget).attr("id");
                //alert(x)
        //$('.side_arrow').click(function(){
         $("#"+id).removeClass("sideOverlay_close");
        $("#"+id).toggleClass("is_open");
          $(this).parents(".sideOverlay").find(".side_arrow span").toggleClass('fa-chevron-left fa-chevron-right');
        });
    });
        $('.startTrip').click(function(){
           $('.startTrip').hide();
           $('.endTrip').show().css("display","block");
        });
        $('.endTrip').click(function(){
            $('.endTrip').hide();
            $('.startTrip').show();
         });
   
});
});
