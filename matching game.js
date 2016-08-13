$(document).ready(function() {
   $('#lyonName').click(function() {
      $(this).html("<p id='lyonNameInner'>Lyon<p>");
       $(this).css("background-color","white");
   });
});

$(document).ready(function() {
   $('#bernName').click(function() {
      $(this).html("<p>Bern<p>");
       $(this).css("background-color","white");
   });
});

$(document).ready(function() {
   $('#lyonPic').click(function() {
      $(this).css("background-image","url(Lyon.jpg)");
       $(this).css("background-size","100%");
   });
});

$(document).ready(function() {
   $('#bernPic').click(function() {
      $(this).css("background-image","url(Bern.jpg)");
       $(this).css("background-size","100%");
   });
});

//case 1: if all are uncovered, reveal some "You won!" message

if (document.getElementById("lyonNameInner").innerHTML == "Lyon") {
    alert("You uncovered Lyon");   
}

/*case 2: if Lyon is uncovered and either Bern or Bern Pic is uncovered, but Lyon Pic is not uncovered, then they all need to revert to original state*/
/*case 3: if Lyon is uncovered and Lyon Pic is uncovered, let them stay*/
/*case 4: if Bern is uncovered and Bern Pic is uncovered, let them stay*/
/*case 5: if Bern is uncovered and either Lyon or Lyon Pic is uncovered, but not Bern Pic, then they all need to revert to original state */