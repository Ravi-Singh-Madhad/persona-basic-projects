function showclock(){
let h = document.getElementsByClassName("hr")[0];
let m = document.getElementsByClassName("min")[0];
let s = document.getElementsByClassName("sec")[0];
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
h.style.transform =`rotate(${30 * hour + min / 2}deg)`;
m.style.transform =`rotate(${6*min}deg)`;
s.style.transform =`rotate(${6*sec}deg)`;
let sound = new Audio('sound.mp3')
sound.play();

}
setInterval(showclock,1000)