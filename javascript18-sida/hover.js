// $("a").hover(function() {         // Angriper classen med jQuery men stylar med css.
//   $(this).css("color", "grey");
// }, function() {
//   $(this).css("color", "black");
// });

$('nav a').on('mouseover', function() { // Tar tag i alla a-element som ligger i nav, skapar en funktion som ska köras när muspekaren hålls över elementet.
    $(this).addClass('color'); // Addera classen color till elementet som angetts på övre raden.
  }), //Slut på funktionen.
  $('nav a').on('mouseleave', function() { // Tar tag i alla a-element som ligger i nav, skapar en funktion som ska köras när muspekaren lämnar elementet.
    $(this).removeClass('color'); // Ta bort classen color från alla a-element som ligger i nav.
  }); //Slut på funktionen.
