$(document).ready(function(){

function discount(){timerId=setInterval(function(){$(".coin__discount").addClass("coin__discount--fading");var n=discountPrice[Math.floor(Math.random()*discountPrice.length)];$(".coin__button-number").html(n),$(".coin__message-discount").html("100"),setTimeout(function(){$(".coin__discount").removeClass("coin__discount--fading")},62)},500)}var timerId=0,discountPrice=["50","100","150","200","250","300","1000","2000"];$(".coin__button").click(function(n){n.preventDefault(),$(this).toggleClass("coin__button--spin"),$(".coin__discount").toggleClass("coin__discount--active"),discount(),setTimeout(function(){$(".coin__message").slideToggle("fast"),$("html, body").animate({scrollTop:$("#prize").offset().top},500),clearInterval(timerId),$(".coin__button-number").html("100"),$(this).removeClass("coin__button--spin"),$(".coin__discount").addClass("coin__discount--fading")},4e3)});


$(".slider__item").click(function(){$(".popup").fadeIn("fast"),$("body").addClass("body--blocked")}),$(".popup__button").click(function(){$(".popup").fadeOut("fast"),$("body").removeClass("body--blocked")});

$(".slider").slick({infinite:!1});

$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=750,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})