const inputbox = document.getElementById("input-box");
const listconatiner = document.getElementById("list-container");

function addtask(){
if (inputbox.value===""){
    alert("you should to write something !")
}
else{
    let li = document.createElement("li")
    li.innerHTML=inputbox.value;
    listconatiner.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputbox.value="";
savedata();
}
listconatiner.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName==="SPAN")
    e.target.parentElement.remove();
    savedata();
},false)
function savedata(){
    localStorage.setItem("data",listconatiner.innerHTML);
}
function showtask(){
    listconatiner.innerHTML=localStorage.getItem("data")
}
showtask();

