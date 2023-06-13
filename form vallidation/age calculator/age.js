function calculate() {
  setInterval(() => {
    let birthdate = new Date(document.getElementById("birthdate").value);
    let now = new Date();
    let ageInms = now.getTime() - birthdate.getTime();
    let ageins = ageInms / 1000 ;
    let ageInmins = ageins / 60 ;
    let ageInhrs = ageInmins / 60 ;
    let ageIndays = ageInhrs / 24 ;
    let ageInmonths = ageIndays / 30.4375 ;
    let ageInyears = ageInmonths / 12 ;
    document.querySelector("#years").innerHTML = Math.floor(ageInyears);
    document.querySelector("#Months").innerHTML = Math.floor(ageInmonths % 12);
    document.querySelector("#Days").innerHTML = Math.floor(ageIndays % 30.4375);
    document.querySelector("#Hours").innerHTML = Math.floor(ageInhrs % 24);
    document.querySelector("#Minutes").innerHTML = Math.floor(ageInmins % 60);
    document.querySelector("#Seconds").innerHTML = Math.floor(ageins % 60);
    document.querySelector("#Seconds").style.borderbottom = "1px solid grey ";
  }, 1000);
}
function reset() {
    window.location.reload();
}
