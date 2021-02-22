'use strict';


var aboutMe = document.querySelector("#aboutMe");
var work = document.querySelector("#work");
var certificates = document.querySelector("#certificates");
var wrapper = document.querySelector(".wrapper");
var skills = document.querySelector(".skills");
var project_3 = document.querySelector(".project_3");
var image = document.querySelector(".image");
var text =  document.querySelector(".text")
var aboutMeText = document.querySelector(".about_me")
var project_2 = document.querySelector(".project_2");
var project_1 = document.querySelector(".project_1");
var columnTwo = document.querySelector(".column2");
var dev = document.querySelector(".developedby");
var menu = document.querySelector(".menu");
var cert = document.querySelector(".cert")
var certTwo = document.querySelector(".cert2")





certificates.addEventListener("click", function (event){

cert.style.display = "block"
project_2.style.display = "none"
project_1.style.display = "none"
project_3.style.display = "none"
dev.style.marginTop = "97em";

});


aboutMe.addEventListener("click", function (event){
cert.style.display = "none"
aboutMeText.style.display = "block "
project_1.style.display = "block"
project_1.firstElementChild.style.display = "none";
project_1.firstElementChild.nextElementSibling.style.display = "none";
project_2.style.display = "block"
project_2.firstElementChild.style.display = "none";
project_2.firstElementChild.nextElementSibling.style.display = "none";
skills.style.display = "block";
 columnTwo.style.height = "auto";
 dev.style.marginTop = "0.8em";
 cert.style.display = "none";
 project_3.style.display = "none"
});


work.addEventListener("click", function (event){

    image.style.display = "flex";
    text.style.display = "flex";
    aboutMeText.style.display = "none"
    project_1.style.display = "flex"
    project_2.style.display = "flex"
    project_3.style.display = "flex"
    project_2.firstElementChild.style.display = "flex";
    project_2.firstElementChild.nextElementSibling.style.display = "flex";
    skills.style.display = "none";
    dev.style.marginTop = "31em";
    cert.style.display = "none";
    
 
});








aboutMe.addEventListener("click", function myFunction() {


    var y = window.matchMedia("(min-width:1920px)")
    if (y.matches) {
  
        dev.style.marginTop = "38em";
        project_1.style.height = "630px";
        project_2.style.height = "630px";
    }  
  
  
  });

  work.addEventListener("click", function myFunction() {


    var y = window.matchMedia("(min-width:1920px)")
    if (y.matches) {
  
  
        project_1.style.height = "450px";
        project_2.style.height = "450px";
        dev.style.marginTop = "48em";
    }  
  
  
  });


 work.addEventListener("click", function myFunction() {


    var y = window.matchMedia("(max-width:1024px)")
    if (y.matches) {

        dev.style.marginTop = "0em";
    }

});

certificates.addEventListener("click", function myFunction() {


    var y = window.matchMedia("(max-width:1024px)")
    if (y.matches) {

        dev.style.marginTop = "0em";
    }

});