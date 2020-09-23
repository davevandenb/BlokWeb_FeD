// JavaScript Document

var hamburger = document.querySelector("nav button:last-of-type");
var navigation = document.querySelector("nav ul")
var hamburgerImg = document.querySelector("nav button:last-of-type img")


hamburger.addEventListener("click", toonNav);

function toonNav() {
    navigation.classList.toggle('zichtbaar');
}


// Hamburger icoon toggle

// hamburger.addEventListener("click", iconAanpassen);

// function iconAanpassen(){
//     hamburgerImg.
// }
// Ik weet even niet meer hoe dit moet

