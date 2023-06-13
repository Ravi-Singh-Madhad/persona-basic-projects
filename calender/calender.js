const monthEl =document.querySelector('.date h1');
const fullDate = document.querySelector('.date p');
const datesEl = document.querySelector('.dates');
const monthIndex = new Date().getMonth();
const lastDate =new Date(new Date().getFullYear(),monthIndex+1,0).getDate();
const firstDate = new Date(new Date().getFullYear(),monthIndex,1).getDay();
const months =["january", "february", "march", "april","may", " June", "July","august","september", "october", "november","december"];
const days =["sunday", " monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
monthEl.innerText =months[monthIndex]
const newDate = new Date();
fullDate.innerText=days[newDate.getDay()]+" "+ newDate.getDate()+" "+ months[newDate.getMonth()]+" "+ newDate.getFullYear();
let dates="";
for(i=firstDate; i<0; i--){
    dates+= `<div class="empty"></div>`;

}
for(i=1; i<=lastDate;i++){
    if(i === new Date().getDate()) {
        dates+= `<div class="today">${i}</div>`;
}
else{
    dates+= `<div>${i}</div>`
}
}
datesEl.innerHTML = dates;