// JavaScript Document

var hamburger = document.querySelector("nav button:last-of-type");
var navigation = document.querySelector("nav ul");
var shippingInfo = document.querySelector("header section:first-of-type button img")


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




var shippingSection = document.querySelector(".test");

function hideShipping() {
    shippingSection.classList.add('.ontzichtbaar');
    
}
shippingInfo.addEventListener("click", hideShipping);



// werkt 1 kant op: alleen van hamburg naar kruis:
///////////////////
// hamburger.addEventListener("click", toonNav);
//
// function toonNav() {
//     navigation.classList.toggle('zichtbaar');
//     var hamburgerImg = document.querySelector("nav button:last-of-type img");
//     hamburgerImg.src = "images/contents/icon_exit.png"
// }






// Hamburger icoon toggle

// hamburger.addEventListener("click", iconAanpassen);

// function iconAanpassen(){
//     hamburgerImg.
// }
// Ik weet even niet meer hoe dit moet

