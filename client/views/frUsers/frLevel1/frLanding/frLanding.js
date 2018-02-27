Template.frLanding.onRendered(function () {
      var options = {
       autoflip: "true",
       autoflipdelay: '2s', //indicates how long to wait between two consective flips
      }
      $(".card-container").flip(options);


        $(".footer_arrow").click(function(){
          $(".fr_landing_body").toggleClass("fr_footer_open")

        });

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

      Meteor.defer(function(){

        //Sales Achieved
        var perValue = $(".sales_achieved").attr("aria-valuenow");

        if(perValue<=33){
            $(".sales_achieved").addClass("red");
        }
        else if(perValue>33 && perValue<=66){
             $(".sales_achieved").addClass("yellow");
        }
        else{
             $(".sales_achieved").addClass("green");
        }

        // Revenue Progress

        var perValue = $(".revenue_progress").attr("aria-valuenow");

        if(perValue<=33){
            $(".revenue_progress").addClass("red");
        }
        else if(perValue>33 && perValue<=66){
             $(".revenue_progress").addClass("yellow");
        }
        else{
             $(".revenue_progress").addClass("green");
        }

        // Spent Progress

        var perValue = $(".spent_progress").attr("aria-valuenow");

        if(perValue<=33){
            $(".spent_progress").addClass("red");
        }
        else if(perValue>33 && perValue<=66){
             $(".spent_progress").addClass("yellow");
        }
        else{
             $(".spent_progress").addClass("green");
        }

      });

});


