import 'platypus';
import 'platypusui';

import './app/app';

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
        console.log("resized");
        
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