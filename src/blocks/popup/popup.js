$('.message').click(function() {
  $('.popup').fadeIn('fast');
  $('body').addClass('body--blocked');
});

$('.popup__button').click(function() {
  $('.popup').fadeOut('fast');
  $('body').removeClass('body--blocked');
});