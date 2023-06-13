
       let time1 = new Date();
       let dayindex = time1.getDay();
       let date = time1.getDate()
       let monthindex =time1.getMonth();
       let year = time1.getFullYear();
       const months =["january", "february", "march", "april","may", " June", "July","august","september", "october", "november","december"];
       const days =["sunday", " monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
       let month = months[monthindex];
       let day = days[dayindex];
       let todaydate = date+"  "+ "  " +day+"   "+month+"   "+year
document.querySelector('.date').innerHTML=todaydate;





setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + " : "  + min + " : " + sec + "  "+ am_pm;
   
  
    document.getElementById("clock").innerHTML = currentTime;

}



