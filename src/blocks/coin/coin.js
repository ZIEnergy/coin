var timerId = 0;
  
var discountPrice = ['50', '100', '250', '300', '500', '800', '1000'];

function discount() {
  timerId = setInterval(function () {
    $('.coin__discount').addClass('coin__discount--fading');
    var discountItem = discountPrice[Math.floor(Math.random()*discountPrice.length)];
    discountPrice = jQuery.grep(discountPrice, function(value) {
      return value != discountItem;
    });
    $('.coin__button-number').html(discountItem);
    $('.coin__message-discount').html('100');
    setTimeout(function () {
      $('.coin__discount').removeClass('coin__discount--fading');
    }, 62);
  }, 500);
};

$('.coin__button').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('coin__button--spin');
  $('.coin__discount').toggleClass('coin__discount--active');
  discount();
  setTimeout(function() {
    $('.coin__message').slideToggle('fast');
    $('html, body').animate({
        scrollTop: $("#prize").offset().top
    }, 500);
    clearInterval(timerId);
    $('.coin__button-number').html('100');
    $(this).removeClass('coin__button--spin');
    $('.coin__discount').addClass('coin__discount--fading');
  }, 4000);
});