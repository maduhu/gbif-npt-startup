(function($){
  $(document).ready(function(){
    $('a[href^="'+Drupal.settings.basePath+'file/"]').colorbox({
      rel:'gallery',
      fastIframe:false,
      data:'colorbox'
    });
  });
})(jQuery);