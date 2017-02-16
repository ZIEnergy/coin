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
});