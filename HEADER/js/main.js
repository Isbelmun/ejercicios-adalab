"use strict";

var burgerIconElement = document.querySelector("#burger-icon");
var closeIconElement = document.querySelector("#close-icon");
var mobileNavElement = document.querySelector("#mobile-nav");



function showMobile() {
  mobileNavElement.classList.add("mobile-show");
  closeIconElement.classList.add("close-show");
  burgerIconElement.classList.add("closeHidden");
}

function closeMobile() {
  mobileNavElement.classList.remove("mobile-show");
  closeIconElement.classList.toggle("close-show");
  burgerIconElement.classList.remove("closeHidden");
 }


burgerIconElement.addEventListener("click", showMobile);
closeIconElement.addEventListener("click", closeMobile);
