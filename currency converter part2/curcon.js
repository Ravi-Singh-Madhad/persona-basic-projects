const droplist = document.querySelectorAll(".drop-list select"),
 FromCurrency = document.querySelector(".from select")
 Tcurrency = document.querySelector(".to select")
 let getButton = document.querySelector(" form button");
for (let i = 0; i < droplist.length; i++) {
   
    for(currency_code in country_code ){
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }
        else if(i == 1){
            selected = currency_code == "INR" ? "selected" : "";
        }
        let optionTag =`<option value="${currency_code}"${selected}>${currency_code}</option>`
        droplist[i].insertAdjacentHTML("beforeend",optionTag)
    }
    droplist[i].addEventListener("change",e=>{
        loadflag(e.target)    })
}
function loadflag(element){
    for(code in country_code){
        if(code == element.value){
            let imgtag = element.parentElement.querySelector("img")
            imgtag.src =`https://flagsapi.com/${country_code[code]}/shiny/64.png`
        }
    }

}
window.addEventListener("load",()=>{
    
    getExchangeRate();

});
getButton.addEventListener("click",e=>{
    e.preventDefault();
    getExchangeRate();

});
const exchangeicon =document.querySelector(".drop-list .icon")
exchangeicon.addEventListener("click",()=>{
    let tempcode = FromCurrency.value;
    FromCurrency.value = Tcurrency.value;
    Tcurrency.value = tempcode;
    loadflag(FromCurrency);
    loadflag(Tcurrency);
    getExchangeRate();
})
function getExchangeRate() {
    const amount = document.querySelector(".amount input "),
     exchangeratetxt =document.querySelector(".exchange-rate");
    let amountval = amount.value;
    if (amountval == "" || amountval == "0"){
        amount.value = "1" 
        amountval = 1;
 }
 exchangeratetxt.innerHTML = "Getting Exchange Rate...."
    let url = `https://v6.exchangerate-api.com/v6/c3fecdf38c171e229f7b3130/latest/${FromCurrency.value}`;
    fetch(url).then(response => response.json()).then (result =>{
        let exchangeRate = result.conversion_rates[Tcurrency.value]
        let totalexchangerate =(amountval*exchangeRate).toFixed(2);
       exchangeratetxt.innerHTML = `${amountval} ${FromCurrency.value} =${totalexchangerate} ${Tcurrency.value}`
    })

    
}