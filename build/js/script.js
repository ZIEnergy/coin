$(document).ready(function(){

$('.coin__button').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('coin__button--spin');
  $('.coin__discount').toggleClass('coin__discount--fading');
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


$(".slider__item").click(function(){$(".popup").fadeIn("fast"),$("body").addClass("body--blocked")}),$(".popup__button").click(function(){$(".popup").fadeOut("fast"),$("body").removeClass("body--blocked")});

$(".slider").slick({infinite:!1});

$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=750,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})