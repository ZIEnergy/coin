$(document).ready(function(){





$(".slider").slick({infinite:!1});

$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=750,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})