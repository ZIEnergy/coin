$(document).ready(function(){

$(".coin__button").click(function(t){t.preventDefault(),$(this).toggleClass("coin__button--spin"),$(".coin__message").slideToggle("fast")});


$(".message").click(function(){$(".popup").fadeIn("fast"),$("body").addClass("body--blocked")}),$(".popup__button").click(function(){$(".popup").fadeOut("fast"),$("body").removeClass("body--blocked")});

$(".slider").slick({infinite:!1});

$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=750,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})