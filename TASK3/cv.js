
                var text="Backend Developer Intern!!";
                var delay=20;
                var currentChar=3;
                var destination="[none]";
                function type()
                {

                {
                var dest=document.getElementById(destination);
                if (dest)
                {
                dest.innerHTML=text.substr(0, currentChar);
                currentChar++;
                if (currentChar>text.length)
                {
                currentChar=3;
                setTimeout("type()", 5000);
                }
                else
                {
                setTimeout("type()", delay);
                }
                }
                }
                }
                function startTyping(textParam, delayParam, destinationParam)
                {
                text=textParam;
                delay=delayParam;
                currentChar=3;
                destination=destinationParam;
                type();
                } 
               javascript:startTyping(text, 70, "textDestination");


               
// var enelm = document.getElementById("codepen");
// var enelm = document.getElementById("email");
// var waelm = document.getElementById("whatsapp");
// var gielm = document.getElementById("linkedin");
// var faelm = document.getElementById("facebook");
// var instagram = document.getElementById("instagram");
// var gielm = document.getElementById("github")

// var opac = 0.1;
// var opacup=true;
// renderLoop();

//       function renderLoop() {
//         setTimeout(function() {
//           if(opacup==true)
//              {opac+=0.1;
//               if(opac>=1)opacup=false;
//              }
//          if(opacup==false)
//              {opac-=0.1;
//               if(opac<=0.3) opacup=true;
//              }
//         enelm.style.opacity = opac;
//         faelm.style.opacity = opac;
//         twelm.style.opacity = opac;
//         gielm.style.opacity = opac;
//         lielm.style.opacity = opac;
//         stelm.style.opacity = opac;
     
          
//         window.requestAnimationFrame(renderLoop); 
//         },300);
//       }

var lang = {
    "html": "90%",
    "css": "70%",
    "javascript": "60%",
    "php": "98%",
    "laravel": "98%"
};
var multiply = 4;

$.each( lang, function( language, pourcent) {

        var delay = 700;

        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);

        multiply++;

    });


    // https://www.sliderrevolution.com/design/cool-javascript-animations/