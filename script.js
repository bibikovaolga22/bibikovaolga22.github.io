'use strict';

var aboutMe = document.querySelector("#aboutMe");
var work = document.querySelector("#work");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var four1 = document.querySelector(".four1");
var wrapper = document.querySelector(".grid");
var overlay = document.querySelector(".overlay")
var overlay1 = document.querySelector(".overlay1")
var overlay2 = document.querySelector(".overlay2")
var overlay3 = document.querySelector(".overlay3")
var skills = document.querySelector(".skills")
var hardskills = document.querySelector(".hardskills")

aboutMe.addEventListener("click", function (event) {
  skills.style.display = "flex";
  hardskills.style.display = "flex";
  overlay1.firstElementChild.style.display = "none"
  overlay2.firstElementChild.style.display = "none"
  skills.style.color = "#4E547D";
  skills.firstElementChild.nextElementSibling.style.color = "#4E547D"
  hardskills.style.color = "#ffffff";
  four.style.backgroundColor = "rgb(255 255 255)"
  overlay2.style.backgroundColor = "#4E547D"
  overlay1.style.backgroundColor = "rgb(255 255 255)"
  overlay.style.display = "none"
  four.firstElementChild.style.display = "none"
  four.firstElementChild.nextElementSibling.style.display = "block"
  four.firstElementChild.nextElementSibling.style.borderRadius = "5px";
  four.firstElementChild.nextElementSibling.style.alignSelf = "center";
  four.firstElementChild.nextElementSibling.style.height = "auto";
  four.style.display = "flex";
  four.style.justifyContent = "center";



});


work.addEventListener("click", function (event) {
  skills.style.display = "none";
  overlay1.firstElementChild.style.display = "block"
  three.style.height = "auto";
  six.style.display = "block";
  seven.style.display = "none"
  overlay2.style.display = "flex"
  overlay3.style.display = "none"
  overlay1.style.height = "auto"
  five.style.height = "auto"
  overlay.style.height = "auto"
  four.style.height = "auto"
  wrapper.style.height = "auto"
  overlay1.style.opacity = "1"
  overlay1.style.backgroundColor = "rgb(232 233 245 / 60%)"
  overlay.style.display = "flex"
  four.firstElementChild.style.display = "block"
  overlay2.firstElementChild.style.display = "block"
  four.firstElementChild.nextElementSibling.style.display = "none"
  four.firstElementChild.nextElementSibling.style.width = "100%";
  four.style.display = "flex";
  four.style.justifyContent = "center";
  skills.style.display = "none";
  hardskills.style.display = "none";
  overlay2.style.backgroundColor = "rgb(232 233 245 / 60%)"


});


aboutMe.addEventListener("click", function myFunction() {


  var y = window.matchMedia("(max-width:730px)")
  if (y.matches) {


    four.firstElementChild.nextElementSibling.style.height = "95%";
    four.firstElementChild.nextElementSibling.style.width = "40%";
  }


});
aboutMe.addEventListener("click", function myFunction() {


  var y = window.matchMedia("(min-width:1920px)")
  if (y.matches) {


    four.firstElementChild.nextElementSibling.style.height = "80%";
    four.firstElementChild.nextElementSibling.style.width = "70%";
  }


});




















