Template.frLanding.onRendered(function () {
    
        $("#current_date").click(function(){
          $(".current_day").show();
          $(".previous_day, .next_day").hide();
        });
    
        $("#next_date").click(function(){
          $(".next_day").show();
          $(".current_day, .previous_day").hide();
        });

        $("#prev_date").click(function(){
          $(".previous_day").show();
          $(".current_day, .next_day").hide();
        });

           
         var swiper = new Swiper('.swiper-day', {
                
          slidesPerView: 8,
          spaceBetween: 0,
          loop: true,
          centeredSlides: true,
          nextButton: '.swiper-button-next-day',
          prevButton: '.swiper-button-prev-day',
          });

          var swiper = new Swiper('.offline_list', {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
          });

            var mySwiper = new Swiper('.swiper-month', {
              speed: 400,
              loop: true,
              mousewheelControl:true,
              nextButton: '.swiper-button-next',
               prevButton: '.swiper-button-prev',
          });

           

          $(".md_scroll").mCustomScrollbar({
              autoHideScrollbar:true,
              theme:"dark"
          });
            // $('#datePicker')
            //   .datepicker({
            //       format: 'mm/dd/yyyy'
            //   })
            //   .on('changeDate', function(e) {
            //       // Revalidate the date field
            //       $('#eventForm').formValidation('revalidateField', 'date');
            //   });

    // $('#eventForm').formValidation({
    //     framework: 'bootstrap',
    //     icon: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },
    //     fields: {
    //         name: {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'The name is required'
    //                 }
    //             }
    //         },
    //         date: {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'The date is required'
    //                 },
    //                 date: {
    //                     format: 'MM/DD/YYYY',
    //                     message: 'The date is not a valid'
    //                 }
    //             }
    //         }
    //     }
    // });
});


