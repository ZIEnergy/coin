$('.coin__button').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('coin__button--spin');
  $('.coin__discount').toggleClass('coin__discount--active');
  setInterval(function(){
    $('.coin__discount').toggleClass('coin__discount--fading');
  }, 500);
  setTimeout(function() {
    $('.coin__message').slideToggle('fast');
    $('html, body').animate({
        scrollTop: $("#prize").offset().top
    }, 500);
  }, 4000);
});