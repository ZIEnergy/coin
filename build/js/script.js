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
  initialSlide: 3
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
};

var st1 = ['04', '05', '05_1'];
var st2 = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
var st3 = ['25', '26', '27', '28', '29', '30'];

var speed = 150;
var stop1 = true;

st1.forEach(function (el, index) {
  setTimeout(function () {
    $('#animation').attr('src', './img/step1/' + el + '.png');
    if (index == st1.length - 1)
      stop1 = false;
  }, index * 400)
});

$('#animation').click(function () {
  if (!stop1) {
    stop1 = true;

// todo посылаем запрос на бекенд

    st2.forEach(function (el, index) {
      setTimeout(function () {
        $('#animation').attr('src', './img/step2/' + el + '.png');
      }, index * speed)
    })

    // todo проверяем пришел ли ответ на бекенд
    // if (true) {
    st3.forEach(function (el, index) {
      setTimeout(function () {
        $('#animation').attr('src', './img/step3/' + 100 + '/' + el + '.png');
      }, (st2.length * speed) + index * speed)
    });
    
    setTimeout(function(){
      location.href='main.html';
    }, 7000);
    // }
  }
});})