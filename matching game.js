/*Define variables for the properties that will change when the user clicks the divs, which are also the properties we will check later to see if there's a match*/

/*These variables are not working...I'm going to comment them out for now
var lyonPicBackground = $('#lyonPic').css("background-image");
var lyonNameVis = $('#lyonNameInner').css('visibility');
var bernPicBackground = $('#bernPic').css("background-image");
var bernNameVis = $('#bernNameInner').css('visibility');
*/

var lyonPicLocation = 'url("file:///Users/clarksanford/Desktop/My%20Websites/Travel%20Matching%20Game/Lyon.jpg")'

var bernPicLocation = 'url("file:///Users/clarksanford/Desktop/My%20Websites/Travel%20Matching%20Game/Bern.jpg")'

function reset() {
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');  
          
}

//Define a function to delay the result of the user's choice

function winOrLose(func) {
       
    var delayTime;

    function delayReveal() {
           
        delayTime = setTimeout(func, 1500);
       }
       
       delayReveal();
}

/*Define what happens when the user clicks on the different divs*/

//When user clicks the box hiding Lyon Name, the name should appear
    
$(document).ready(function() {
   $('#lyonName').click(function() {
       $('#lyonNameInner').css('visibility','visible');
       $(this).css("background-color","white");
       
    function checkResult() {
     if ($('#bernPic').css("background-image") == bernPicLocation && 
                $('#bernNameInner').css('visibility') == "hidden" && 
                $('#lyonPic').css("background-image") != lyonPicLocation) {
               
                reset();
           }
           else if ($('#bernNameInner').css('visibility') == "visible" && 
                $('#bernPic').css("background-image") != bernPicLocation && 
                $('#lyonPic').css("background-image") != lyonPicLocation) {
           
                reset();
            }
           else if ($('#lyonPic').css("background-image") == lyonPicLocation) {
           
                alert("Match found!");
            }      
        }
       
       winOrLose(checkResult);
   
       
    });
});

//When user clicks the box hiding Bern Name, the name should appear
    
$(document).ready(function() {
   $('#bernName').click(function() {
      $('#bernNameInner').css('visibility','visible');
       $(this).css("background-color","white");
       
       function checkResult() {
     if ($('#lyonPic').css("background-image") == lyonPicLocation && 
                $('#lyonNameInner').css('visibility') == "hidden" && 
                $('#bernPic').css("background-image") != bernPicLocation) {
               
                reset();
           }
           else if ($('#lyonNameInner').css('visibility') == "visible" && 
                $('#lyonPic').css("background-image") != lyonPicLocation && 
                $('#bernPic').css("background-image") != bernPicLocation) {
           
                reset();
            }
           else if ($('#bernPic').css("background-image") == bernPicLocation) {
           
                alert("Match found!");
            }      
        }
       
       winOrLose(checkResult);
   });
});

//When user clicks the box hiding Lyon Pic, the picture should appear
    
$(document).ready(function() {
   $('#lyonPic').click(function() {
      $(this).css("background-image","url(Lyon.jpg)");
       $(this).css("background-size","cover");
       $(this).css("background-position","center");
       
       function checkResult() {
            if ($('#bernPic').css("background-image") == bernPicLocation && 
                $('#lyonNameInner').css('visibility') == "hidden" && 
                $('#bernNameInner').css("visibility") == "hidden") {
               
                reset();
           }
           else if ($('#bernNameInner').css('visibility') == "visible" && 
                $('#lyonNameInner').css("visibility") == "hidden" && 
                $('#bernPic').css("background-image") != bernPicLocation) {
           
                reset();
            }
           else if ($('#lyonNameInner').css("visibility") == "visible") {
           
                alert("Match found!");
            }      
        }
       
       winOrLose(checkResult);
   });
});

//When user clicks the box hiding Bern Pic, the picture should appear
$(document).ready(function() {
   $('#bernPic').click(function() {
      $(this).css("background-image","url(Bern.jpg)");
       $(this).css("background-size","cover");
       $(this).css("background-position","center");
       
       function checkResult() {
            if ($('#lyonPic').css("background-image") == lyonPicLocation && 
                $('#lyonNameInner').css('visibility') == "hidden" && 
                $('#bernNameInner').css("visibility") == "hidden") {
               
                reset();
           }
           else if ($('#lyonNameInner').css('visibility') == "visible" && 
                $('#bernNameInner').css("visibility") == "hidden" && 
                $('#lyonPic').css("background-image") != lyonPicLocation) {
           
                reset();
            }
           else if ($('#bernNameInner').css("visibility") == "visible") {
           
                alert("Match found!");
            }      
        }
       
       winOrLose(checkResult);
   });
});

/*When user clicks 'check results' button, results should be compared. Here are the options:

    Case 1: LYON NAME + BERN PIC --> OOPS try again
    Case 2: LYON NAME + LYON PIC --> MATCH!
    Case 3: LYON NAME + BERN NAME --> OOPS try again
    
    Case 4: BERN PIC + LYON PIC --> OOPS try again
    Case 5: BERN PIC + BERN NAME --> MATCH!
    
    Case 6: LYON PIC + BERN NAME --> OOPS try again

    And here is the code translation of these options:
    
    Case 1: lyonNameVis == "visible" && bernPicBackground == bernPicLocation && bernNameVis == "hidden" && lyonPicBackground != lyonPicLocation
    
    Case 2: lyonNameVis == "visible" && lyonPicBackground == lyonPicLocation
    
    Case 3: lyonNameVis == "visible" && bernNameVis == "visible" && lyonPicBackground != lyonPicLocation && bernPicBackground != bernPicLocation
    
    Case 4: bernPicBackground == bernPicLocation && lyonPicBackground == lyonPicLocation && bernNameVis == "hidden" && lyonNameVis == "hidden"
    
    Case 5: bernPicBackground == bernPicLocation && bernNameVis == "visible"
    
    Case 6: lyonPicBackground == lyonPicLocation && bernNameVis == "visible" && lyonNameVis == "hidden" && bernPicBackground != bernPicLocation

function compareResults() {
    if (lyonNameVis == "visible" && bernPicBackground == bernPicLocation && bernNameVis == "hidden" && lyonPicBackground != lyonPicLocation) {
       
           alert("Oops! Try again.");
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');  
       } 
       
    if (lyonNameVis == "visible" && lyonPicBackground == lyonPicLocation) {
           
           alert("You found a match!");
           
       }
    
    if (lyonNameVis == "visible" && bernNameVis == "visible" && lyonPicBackground != lyonPicLocation && bernPicBackground != bernPicLocation) {
            
           alert("Oops! Try again.");
        
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');  
        }
    
    if (bernPicBackground == bernPicLocation && lyonPicBackground == lyonPicLocation && bernNameVis == "hidden" && lyonNameVis == "hidden") {
            
           alert("Oops! Try again.");
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');  
        }
    
    if (bernPicBackground == bernPicLocation && bernNameVis == "visible") {
            
            alert("You found a match!");
        }
    
    if (lyonPicBackground == lyonPicLocation && bernNameVis == "visible" && lyonNameVis == "hidden" && bernPicBackground != bernPicLocation) {
            
           alert("Oops! Try again.");
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');  
        }
}

/* MORE CONDITIONALS I MAY OR MAY NOT NEED

if (bernPicBackground == bernPicLocation && lyonNameVis == "visible") {
           alert("Oops! Try again.");
           
           //Reset all tiles
           
           $('#lyonName').removeAttr('style');
           $('#lyonNameInner').css('visibility','hidden');
           $('#bernName').removeAttr('style');
           $('#bernNameInner').css('visibility','hidden');
          
           $('#lyonPic').removeAttr('style');
           $('#bernPic').removeAttr('style');
       }
       else if (lyonPicBackground == lyonPicLocation && bernNameVis == "visible")
       */