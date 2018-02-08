$(document).ready(function() { // När sidan har laddats klart ska funktionen köras.

  $('#post1').on('click', function() { // Tar tag i alla element med id post1, när muspekaren klickar på elementet ska funktionen köras.
    $('html, body').animate({ // Html och body ska animeras när muspekaren trycker på #post1 med hjälp av metoden animate.
      scrollTop: $('#content11').offset().top // Animationen är att html, body ska scrolla till toppen av elementet som har id content11.
    })
  })

  $('#post2').on('click', function() { // Tar tag i alla element med id post2, när muspekaren klickar på elementet ska funktionen köras.
    $('html, body').animate({ // Html och body ska animeras när muspekaren trycker på #post2 med hjälp av metoden animate.
      scrollTop: $('#content9').offset().top // Animationen är att html, body ska scrolla till toppen av elementet som har id content9.
    })
  })

  $('#post3').on('click', function() { // Tar tag i alla element med id post3, när muspekaren klickar på elementet ska funktionen köras.
    $('html, body').animate({ // Html och body ska animeras när muspekaren trycker på #post3 med hjälp av metoden animate.
      scrollTop: $('#content4').offset().top // Animationen är att html, body ska scrolla till toppen av elementet som har id content4.
    })
  })

});
