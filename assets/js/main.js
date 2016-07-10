$(document).ready(function ($) {
  smoothScroll.init({
      speed    : 1000,
      easing   : 'easeInOutQuint',
      updateURL: false
  });

  $('#home-subtitle').typed({
      strings: ["developer.^1000 designer.^1000 dictator."]
  });

  $('.random-dark').each(function ( ) {
      $(this).css('background-color', randomColor({ luminosity: 'dark' }));
  });

  $('.panel-toggle').click(function ( ) {
      $(this).find('.fa-chevron').toggleClass('fa-chevron-up fa-chevron-down');
  });

  $('.rrssb-buttons').each(function ( ) {
    var url  = $(this).data('url');
    var text = $(this).data('text');

    $(this).rrssb({
        title: text,
        url  : url,
    });
  });

});