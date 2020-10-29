// JavaScript Document

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
    
    
 // if element    
   
  // MAAK 2 FUNCTIONS
}




var shippingSection = document.querySelector("header > section:first-of-type");
var closeShipping = document.querySelector("header > section:first-of-type button")

function hideShipping() {
    shippingSection.classList.add('ontzichtbaar');
    console.log(hideShipping)
}
closeShipping.addEventListener("click", hideShipping);


// werkt 1 kant op: alleen van hamburg naar kruis:
///////////////////
// hamburger.addEventListener("click", toonNav);
//
// function toonNav() {
//     navigation.classList.toggle('zichtbaar');
//     var hamburgerImg = document.querySelector("nav button:last-of-type img");
//     hamburgerImg.src = "images/contents/icon_exit.png"
// }









// UITKLAPBARE SECTIONS VAN DE FOOTER NAVIGATIE:

// add eventlistener voor click om een attribute .toon toe te voegen aan de list items van deze ul's
// + padding op de (footer>section>section) toevoegen: (padding: 20px 0 10px 0;)



var section1 = document.querySelector("footer>section:last-of-type>section:first-of-type");
var lijst1 = document.querySelector("footer>section>section:first-of-type>ul")

function toonLijst1() {
    lijst1.classList.toggle('laatZien');
    var min1 = document.querySelector("footer>section>section:first-of-type>p");
      if (min1.innerHTML === "-") {
         min1.innerHTML = "+";
      } else {
         min1.innerHTML = "-";
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
var lijst3 = document.querySelector("footer>section>section:last-of-type>ul")

function toonLijst3() {
    lijst3.classList.toggle('laatZien');
    var min3 = document.querySelector("footer>section>section:last-of-type>p")
    if (min3.innerHTML === "-") {
        min3.innerHTML = "+";
     } else {
        min3.innerHTML = "-";
     }
    console.log(toonLijst3)
}
section3.addEventListener("click", toonLijst3);
















// Hamburger icoon toggle

// hamburger.addEventListener("click", iconAanpassen);

// function iconAanpassen(){
//     hamburgerImg.
// }
// Ik weet even niet meer hoe dit moet

