
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


    // https://www.sliderrevolution.com/design/cool-javascript-animations/