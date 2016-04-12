import 'platypus';
import 'platypusui';

import './app/app';

<<<<<<< HEAD
=======
// open mobile menu
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = "block";
    document.getElementById('nav').setAttribute("class", "blur");
    document.getElementById('vp').setAttribute("class", "blur");
    document.getElementById('footer').setAttribute("class", "blur");
});

// close mobile menu
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = "none";
    // this is potentially dangerous if there are other classes on these elements
    document.getElementById('nav').removeAttribute("class");
    document.getElementById('vp').removeAttribute("class");
    document.getElementById('footer').removeAttribute("class");
});

>>>>>>> 663787519f6708aeb436000c1044294db58ab8ae
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('nav');
    var logo = document.getElementById('logo');
    var allBars = document.getElementsByClassName('bar');
    
    window.addEventListener('scroll', function() {
        // only do this on mobile
        if (document.documentElement.clientWidth <= 960) {
            if (window.scrollY > 200) {
                // scrolled past 200px
                nav.style.backgroundColor = "white";
                logo.style.backgroundImage = "url('/images/coversharks-mark-color.svg')";
                for (var i = 0; i < allBars.length; i++) {
                    (<HTMLElement>allBars[i]).style.borderColor = "#2794c6";
                }
            } else {
                // scrolled to top
                nav.style.backgroundColor = "transparent";
                logo.style.backgroundImage = "url('/images/coversharks-mark-white.svg')";
                for (var i = 0; i < allBars.length; i++) {
                    (<HTMLElement>allBars[i]).style.borderColor = "white";
                }
            }
        }
    });
    
    window.addEventListener('resize', function() {
<<<<<<< HEAD
        console.log("resized");
        
=======
>>>>>>> 663787519f6708aeb436000c1044294db58ab8ae
        if (document.documentElement.clientWidth <= 960) {
            // mobile reset
            
            if (window.scrollY > 200) {
                // scroll position past 200px
                nav.style.backgroundColor = "white";
                logo.style.backgroundImage = "url('/images/coversharks-mark-color.svg')";
                for (var i = 0; i < allBars.length; i++) {
                    (<HTMLElement>allBars[i]).style.borderColor = "#2794c6";
                }
            } else {
                // scroll position before 200px
                nav.style.backgroundColor = "transparent";
                logo.style.backgroundImage = "url('/images/coversharks-mark-white.svg')";
                for (var i = 0; i < allBars.length; i++) {
                    (<HTMLElement>allBars[i]).style.borderColor = "white";
                }
            }
        } else {
            // desktop reset
            
            logo.style.backgroundImage = "url('/images/logo-color.svg')";
            nav.style.backgroundColor = "white";

        }
    });
});