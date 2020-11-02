// JavaScript Document


// Sluiten van de verzendingsinformatie

var shippingSection = document.querySelector("header > section:first-of-type");
var closeShipping = document.querySelector("header > section:first-of-type button")

function hideShipping() {
    shippingSection.classList.add('ontzichtbaar');
    console.log(hideShipping)
}
closeShipping.addEventListener("click", hideShipping);


// Togglen van het navigatiemenu in de header op mobile devices

var hamburger = document.querySelector("nav button:last-of-type");
var navigation = document.querySelector("nav ul");

hamburger.addEventListener("click", toonNav);

function toonNav() {
    var hamburgerImg = document.querySelector("nav button:last-of-type img");
    console.log(navigation)
    if (navigation.classList.contains('zichtbaar')) {
        hamburgerImg.src = "images/contents/icon_menu.png";
    }
    else {
        hamburgerImg.src = "images/contents/icon_exit.png";
    } 
    navigation.classList.toggle('zichtbaar');
}


// Sections uitklappen van de footer navigatie

var section1 = document.querySelector("footer>section:last-of-type>section:first-of-type");
var lijst1 = document.querySelector("footer>section>section:first-of-type>ul")
function toonLijst1() {
    lijst1.classList.toggle('laatZien');
    var min1 = document.querySelector("footer>section>section:first-of-type>p");
      if (min1.innerHTML === "+") {
         min1.innerHTML = "-";
      } else {
         min1.innerHTML = "+";
      }
    console.log(toonLijst1)
}
section1.addEventListener("click", toonLijst1);

var section2 = document.querySelector("footer>section:last-of-type>section:nth-of-type(2)");
var lijst2 = document.querySelector("footer>section>section:nth-of-type(2)>ul")
function toonLijst2() {
    lijst2.classList.toggle('laatZien');
    var min2 = document.querySelector("footer>section>section:nth-of-type(2)>p")
    if (min2.innerHTML === "-") {
        min2.innerHTML = "+";
     } else {
        min2.innerHTML = "-";
     }
    console.log(toonLijst2)
}
section2.addEventListener("click", toonLijst2);

var section3 = document.querySelector("footer>section:last-of-type>section:last-of-type");
var lijst3 = document.querySelector("footer>section>section:last-of-type>ul");
function toonLijst3() {
    lijst3.classList.toggle('laatZien');
    var min3 = document.querySelector("footer>section>section:last-of-type>p");
    if (min3.innerHTML === "-") {
        min3.innerHTML = "+";
     } else {
        min3.innerHTML = "-";
     }
}
section3.addEventListener("click", toonLijst3);



// CITIZENS.html PAGE

var scrollKnop = document.querySelector("#scroll")

scrollKnop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
