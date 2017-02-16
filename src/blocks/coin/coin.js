var timerId = 0;
var i = 0;

var discountPrice = ['100', '500', '1000', '50', '200'];

function discount() {
  timerId = setInterval(function () {
    $('.coin__discount').addClass('coin__discount--fading');
    discountItem = discountPrice[i];
    console.log(discountItem);
    $('.coin__button-number').html(discountItem);
    $('.coin__message-discount').html('100');
    setTimeout(function () {
      $('.coin__discount').removeClass('coin__discount--fading');
    }, 62);
    i += 1;
  }, 500);
};

//$('.coin__button').click(function(e) {
//  e.preventDefault();
//  $(this).toggleClass('coin__button--spin');
//  $('.coin__discount').toggleClass('coin__discount--active');
//  discount();
//  setTimeout(function() {
//    $('.coin__message').slideToggle('fast');
//    $('html, body').animate({
//        scrollTop: $("#prize").offset().top
//    }, 500);
//    clearInterval(timerId);
//    $('.coin__button-number').html('100');
//    $(this).removeClass('coin__button--spin');
//    $('.coin__discount').addClass('coin__discount--fading');
//  }, 9000);
//});
