const btnEl =document.querySelector(".button")
const bodyEl = document.querySelector("body")
var colors = ["green", "yellow", "orange", "red", "black", "white","violet","grey","purple"]
bodyEl.style.background = "green";
btnEl.addEventListener("click", addColor)
function addColor(){
    console.log("clicked")
    var color = parseInt( Math.random() * colors.length)
    bodyEl.style.background = colors[color];
    count++;
}