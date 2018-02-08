$(document).ready(function() { //För att läsa in innehållet på sidan.

  var url = "http://localhost/javascript18/wp-json/wp/v2/pages/?_embed=true";
  $.ajax({ //Här kommer ett stycke ajax-kod.
    type: "GET", //Hämta innehåll.
    url: url, // Metod för att hämta innehållet från en url, som är definierad i variabeln url.
    timeout: 2000, // //Timeout startar när ajax-förfrågan skickas, tiden anges i millisekunder.
    beforeSend: function() { // En funktion som körs innan objektet är skickat.
      console.log('before'); // Logga before i consolen när funktionen har körts.
    },
    complete: function() { // När förfrågan efter objektet är klar körs funktionen.
      console.log('Completed'); //När sidan har laddats syns completed.
    },
    success: function(successData) { // Funktionen ska köras när förfrågan har lyckats.
      console.log(successData); // Logga successData i consolen.
      getContent(successData); // Funktionen getContent som jag skrivit längre ner ska köras när förfrågan har lyckats (success), med parametern successData.
    },
    error: function() { // En funktion som körs om förfrågan misslyckas.
      console.log('Something went wrong...'); //Om förfrågan misslyckas syns ett felmeddelande.
    }
  });

  function getContent(data) { // Funktion för att hämta innehållet från WP-sidan.
    console.log(data); // Här loggas datan från funktionen.

    var insertToHTML = ''; // Variabel för att skapa html-kod i detta dokument. Den lämnas tom för att datan ska loopas igenom och en ny div med h1, img och content ska skapas för varje sida i WP. Lägger jag till fler sidor inne i WP kommer de att synas på min sida.

    for (var i = 0; i < data.length; i++) { //Loopar igenom all data som finns på url:en som är definierad i variabeln url.
      var title = data[i].title.rendered; //Hämtar alla titlar.
      var content = data[i].content.rendered; //Hämtar allt content.

      if (data[i]._embedded['wp:featuredmedia']) { //Om det finns featured media under embedded så ska de också hämtas.
        var picture = data[i]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url; //Hämta bilderna i embedded->featured media i storleken medium.
        var pictureCaption = data[i]._embedded['wp:featuredmedia'][0].caption.rendered; //Hämta text som beskriver bilderna.
        var pictureTitle = data[i]._embedded['wp:featuredmedia'][0].title.rendered; //Hämta bildens titel.
      }

      insertToHTML += '<div id="content' + data[i].id + '">'; //För att ta reda på varje sidas unika id från WP. Även lägga till content före siffran i varje unikt id.
      insertToHTML += '<h1>' + title + '</h1>'; // Skapar en h1 som innehåller titeln från WP-sidan.
      insertToHTML += '<img src="'; // Ett img-element där en bild ska synas.
      insertToHTML += picture; // Variabeln där bilden hämtas.
      insertToHTML += '">'; // Img-elementet avslutas.
      insertToHTML += content; // Lägger in allt innehåll från WP-sidan som hämtats i variabeln content.
      insertToHTML += '</div>'; // Div-elementet avslutas.


    }
    $('#content').append(insertToHTML); // Append är en metod för att lägga in innehållet jag har hämtat och elementen jag har skapat på min sida. Jag vill lägga in mitt "nya innrhåll" i elementet med id content.
  }
});
