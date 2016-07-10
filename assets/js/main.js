---
---

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

  $('.jekyll-search').each(function ( ) {
      var target     = $(this).data('target');
      var $container = $(target);

      $container.addClass('sr-only')
      $container.append('<div class="panel panel-default"><div class="panel-body"><ul class="list-unstyled no-margin"/></div></div>');
      
      var resultCont = $container.find('ul')[0];

      SimpleJekyllSearch({
        searchInput     : $(this)[0],
        resultsContainer: resultCont,
        json            : '{{ site.baseurl }}/assets/data/search.json'
      });

      $(this).on('input', function (e) {
          $(this).val() ? $container.removeClass('sr-only') : $container.addClass('sr-only');
      });
  });  

  $('.rrssb-buttons').each(function ( ) {
    var url  = $(this).data('url');
    var text = $(this).data('text');

    $(this).rrssb({
        title: text,
        url  : url,
    });
  });

  $('.loader-brand').fadeOut(500);
});