 $(document).ready(function () {
     $window = $(window);
     $('div[data-type=".statistic background, .what_can_i_do background"]').each(function () {
         var $bgobj = $(this);
         $(window).scroll(function () {
             var yPos = -($window.scrollTop() / $bgobj.data('speed'));
             var coords = '50% ' + yPos + 'px';
             $bgobj.css({
                 backgroundPosition: coords
             });
         });
     });
 });