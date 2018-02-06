
    
  Template.wrraper.onRendered(function () {

         var swiper = new Swiper('.swiper-day', {
            slidesPerView: 7,
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
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
            slidesPerView:'auto',
            mousewheelControl:true,
          });
         


});


    $(document).ready(function(){
        $('.footer_arrow').click(function(){
          $("footer").toggleClass("footer_close");
          $(this).parents('footer').find(".footer_arrow span").toggleClass('fa-angle-double-down fa-angle-double-up');
        });

        $(function () { 
$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
}); 

// $( window ).scroll(function() { 
// if($( window ).scrollTop() > 10){ // scroll down abit and get the action 
$(".progress-bar").each(function(){
each_bar_width = $(this).attr('aria-valuenow');
$(this).width(each_bar_width + '%');
});

        
      });



      document.addEventListener('DOMContentLoaded', function(){
  let body = document.querySelector('body');
  document.querySelector('.themeselect').addEventListener('change', handleThemeSelect);
  function handleThemeSelect(event) {
    event.preventDefault();
    
    // change body class
    body.className = event.target.value;
  };
  
});

