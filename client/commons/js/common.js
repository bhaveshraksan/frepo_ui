
    
  Template.frLanding.onRendered(function () {
           
         var swiper = new Swiper('.swiper-day', {
                
          slidesPerView: 8,
          spaceBetween: 0,
          loop: true,
          centeredSlides: true,
          nextButton: '.swiper-button-next-day',
          prevButton: '.swiper-button-prev-day',
          });

          var swiper = new Swiper('.offline_list', {
            slidesPerView: 4,
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
            $('#datePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });

    $('#eventForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
        }
    });

    // $('#datePicker')
    //     .datepicker({
    //         format: 'mm/dd/yyyy'
    //     })
    //     .on('changeDate', function(e) {
    //         // Revalidate the date field
    //         $('#eventForm').formValidation('revalidateField', 'date');
    //     });

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





//       document.addEventListener('DOMContentLoaded', function(){
//   let body = document.querySelector('body');
//   document.querySelector('.themeselect').addEventListener('change', handleThemeSelect);
//   function handleThemeSelect(event) {
//     event.preventDefault();
    
//     // change body class
//     body.className = event.target.value;
//   };
  
// });
