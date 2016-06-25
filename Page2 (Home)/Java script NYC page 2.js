
function openNav() {
    document.getElementById("side-nav-bar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("side-nav-bar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var slideIndex = 0;
carousel();


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";

}
