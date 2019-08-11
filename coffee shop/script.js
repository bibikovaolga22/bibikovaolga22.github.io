
  function parallax() {

    var scrolled = $(window).scrollTop() + 1;

    $('.parallax').css('background-position', '0' + -(scrolled * 0.3) + 'px');

  }
  $(window).scroll(function(e) {

    parallax();

  });

  $(window).scroll(function() {
    var sticky = $('header'),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');

  });
  window.onscroll = function() {
    scrollFunction()
  };

  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 400) {
      $("header ").addClass("shrink");
    } else {
      $("header ").removeClass("shrink");
    }
  });
  AOS.init({
     duration: 1000,

   });
