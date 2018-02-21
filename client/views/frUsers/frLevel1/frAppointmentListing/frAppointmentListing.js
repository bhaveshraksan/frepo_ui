Template.frAppointmentListing.onRendered(function () {
    $(document).ready(function(){
        $('.side_arrow').click(function(){
         $(".sideOverlay").removeClass("sideOverlay_close");
        $(".sideOverlay").toggleClass("is_open");
         
         // $(".is_open").toggleClass(".sideOverlay_close");
          $(this).parents('.sideOverlay').find(".side_arrow span").toggleClass('fa-chevron-left fa-chevron-right');
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
