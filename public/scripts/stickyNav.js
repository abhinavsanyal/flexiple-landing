$(document).ready(function() {
  // grab the initial top offset of the navigation 
     var stickyNavTop = $('.nav').offset().top;
     
     // our function that decides weather the navigation bar should have "fixed" css position or not.
     var stickyNav = function(){
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top
           
      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) { 
          $('.nav').addClass('sticky');
          $('.nav__logo').addClass('sticky__logo');
          $('.main-nav').addClass('sticky-main-nav');
          $('.sticky-main-nav').removeClass('main-nav');
        } else {
            $('.nav').removeClass('sticky'); 
            $('.nav__logo').removeClass('sticky__logo');
            $('.sticky-main-nav').addClass('main-nav');
            $('.main-nav').removeClass('sticky-main-nav');
        }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});