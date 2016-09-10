/*Define variables for the properties that will change when the user clicks the divs, which are also the properties we will check later to see if there's a match*/

var lyonPicBackground, lyonNameHTML, bernPicBackground, bernNameHTML;

var lyonPicLocation = 'url("file:///Users/clarksanford/Desktop/My%20Websites/Travel%20Matching%20Game/Lyon.jpg")'

var bernPicLocation = 'url("file:///Users/clarksanford/Desktop/My%20Websites/Travel%20Matching%20Game/Bern.jpg")'

/*Define what happens when the user clicks on the different divs*/

//When user clicks the box hiding Lyon Name, the name should appear
    
$(document).ready(function() {
   $('#lyonName').click(function() {
      $(this).html("<p id='lyonInner'>Lyon</p>");
       $(this).css("background-color","white");
       lyonNameHTML = document.getElementById('lyonName').innerHTML;
   });
});

//When user clicks the box hiding Bern Name, the name should appear
    
$(document).ready(function() {
   $('#bernName').click(function() {
      $(this).html("<p id='bernInner'>Bern</p>");
       $(this).css("background-color","white");
       bernNameHTML = document.getElementById('bernName').innerHTML;
   });
});

//When user clicks the box hiding Lyon Pic, the picture should appear
    
$(document).ready(function() {
   $('#lyonPic').click(function() {
      $(this).css("background-image","url(Lyon.jpg)");
       $(this).css("background-size","cover");
       $(this).css("background-position","center");
       lyonPicBackground = $('#lyonPic').css("background-image");
   });
});

//When user clicks the box hiding Bern Pic, the picture should appear
$(document).ready(function() {
   $('#bernPic').click(function() {
      $(this).css("background-image","url(Bern.jpg)");
       $(this).css("background-size","cover");
       $(this).css("background-position","center");
       bernPicBackground = $('#bernPic').css("background-image");
   });
});

/*When user clicks 'check results' button, results should be compared:

If lyonPic background-image == url(Lyon.jpg) && lyonName html == "<p>Lyon</p>", then output a message saying "Match found!"

*/
$(document).ready(function() {
   $('button').click(function() {
       if (lyonPicBackground == lyonPicLocation && lyonNameHTML == "<p>Lyon</p>") {
       
           alert("You matched Lyon!");   
       } 
       else if (bernPicBackground == bernPicLocation && bernNameHTML == "<p>Bern</p>") {
           alert("You matched Bern!");
       }
       else {
           
           alert("Oops! Try again.");
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('p').remove('lyonInner');
           $('#bernName').removeAttr('style');
           $('p').remove('bernInner');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');
       }
   });
});