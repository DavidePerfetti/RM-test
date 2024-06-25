
document.addEventListener('DOMContentLoaded', function() {
// Get the button:
let mybutton = document.getElementById("backtotop");
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
});



