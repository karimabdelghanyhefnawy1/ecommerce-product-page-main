let myIcon = document.querySelector(".icon-menu");
let myIcon2 = document.querySelector(".icon-menu2");
let myDiv = document.querySelector("ul");


myIcon.onclick = function () {
    myDiv.style.cssText = "display: block;"
    myIcon.style.cssText = "display: none;"
    myIcon2.style.cssText = "display: block;"
}


myIcon2.onclick = function () {
    myDiv.style.cssText = "display: none;"
    myIcon.style.cssText = "@media screen and ( max-width: 767px) { .icon-menu{ display: block;} }"
    myIcon2.style.cssText = "display: none;"
}

let myImg1 = document.querySelector(".imageone");
let bigImg1 = document.querySelector(".one");

let myImg2 = document.querySelector(".imagetwo");
let bigImg2 = document.querySelector(".two");

let myImg3 = document.querySelector(".imagethree");
let bigImg3 = document.querySelector(".three");

let myImg4 = document.querySelector(".imagefour");
let bigImg4 = document.querySelector(".four");


myImg1.onclick = function () {
    bigImg1.style.cssText = "z-index: 1;"
    bigImg2.style.cssText = "z-index: 0;"
    bigImg3.style.cssText = "z-index: 0;"
    bigImg4.style.cssText = "z-index: 0;"
}

myImg2.onclick = function () {
    bigImg1.style.cssText = "z-index: 0;"
    bigImg2.style.cssText = "z-index: 1;"
    bigImg3.style.cssText = "z-index: 0;"
    bigImg4.style.cssText = "z-index: 0;"
}

myImg3.onclick = function () {
    bigImg1.style.cssText = "z-index: 0;"
    bigImg2.style.cssText = "z-index: 0;"
    bigImg3.style.cssText = "z-index: 1;"
    bigImg4.style.cssText = "z-index: 0;"
}

myImg4.onclick = function () {
    bigImg1.style.cssText = "z-index: 0;"
    bigImg2.style.cssText = "z-index: 0;"
    bigImg3.style.cssText = "z-index: 0;"
    bigImg4.style.cssText = "z-index: 1;"
}
























