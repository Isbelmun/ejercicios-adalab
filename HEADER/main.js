"use strict";

var burgerIconElement = document.querySelector("#burger-icon");
var closeIconElement = document.querySelector("#close-icon");
var mobileNavElement = document.querySelector("mobile-nav");
var burgerBtnElement = document.querySelector(".burger-btn");
var closeBtnElement = document.querySelector(".close-btn");


function showHideMobile() {
  mobileNavElement.classList.toggle("mobileHidden");
  closeIconElement.classList.toggle("closeHidden");
  burgerIconElement.classList.toggle("close-burger");
}


burgerBtnElement.addEventListener("click", showHideMobile);
closeBtnElement.addEventListener("click", showHideMobile);
