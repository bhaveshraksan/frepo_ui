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

