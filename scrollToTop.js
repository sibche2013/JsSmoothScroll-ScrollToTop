    //Self-Invoking Function For Creating Image Tag For Go Up Button
    (function createScrollImg() {
        var goUpButton = document.createElement("img");
        goUpButton.src = "scrollToTop.png";
        goUpButton.id = "goUp";
        document.body.appendChild(goUpButton);

        //Add Listener For When User Click On Button
        goUpButton.addEventListener('click', function () {
            goUpButton.onclick = smoothScrollTo(0);
        })
    }());

    //Go Up Function
    setInterval(function () {
        var goUp = document.getElementById("goUp");
        goUp.style.cursor = "pointer";
        //if Distance From Top Was > 100px
        if (scrollY > 100) {
            goUp.style.display = "inline";
        }
        //if Distance From Top Was < 100px
        else {
            goUp.style.display = "none";
        }
    }, 100);

    //Smooth Scroll
    function smoothScrollTo(yPosition) {
        //How Much (Pixel) Go Down Or Up Scroll Bar?
        var step = 10;
        //if Distance From Top Was < yPosition
        if (scrollY < yPosition) {
            scrollBy(0, step);
            //Function For Repeat Smooth Scroll Function
            setTimeout(function () {
                smoothScrollTo(yPosition);
            }, 1)
        }
        //if Distance From Top Was > yPosition
        else if (scrollY > yPosition) {
            //Step Should * -1 For When ScrollY > yPosition
            step *= -1;
            scrollBy(0, step);
            //Function For Repeat Smooth Scroll Function
            setTimeout(function () {
                smoothScrollTo(yPosition);
            }, 1)
        }
    }