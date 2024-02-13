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
    myIcon.style.cssText = "display: block;"
    myIcon2.style.cssText = "display: none;"
}
























