$(document).ready(function(){

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
  }, 3000);
});



$('.slider__item').click(function() {
  $('.popup').fadeIn('fast');
  $('body').addClass('body--blocked');
});

$('.popup__button').click(function() {
  $('.popup').fadeOut('fast');
  $('body').removeClass('body--blocked');
});

$('.slider').slick({
  infinite: false,
  initialSlide: $('.slider__item').length
});

$(function () {
    $(window).bind('resize', function () {
        resizeMe();
    }).trigger('resize');
});

var resizeMe = function () {
    //Standard width, for which the body font size is correct
    var preferredWidth = 750;
    //Base font size for the page

    var fontsize = 10;

    var displayWidth = $(window).width();
    var percentage = displayWidth / preferredWidth;
    var newFontSize = fontsize * percentage;
    $("html").css("font-size", newFontSize);
};})