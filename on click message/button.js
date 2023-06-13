//   1 case4 one in which we print msg directly through by the click on button
// const messageEl =document.querySelector('.msg')



// function showmsg(){

// messageEl.innerHTML = "hello world";


// }



// 2- to print message which could be entered by the user at input field
// let text1 = document.querySelector('#entertext')

// const messageEl =document.querySelector('.msg')
// function showmsg(){
// messageEl.textContent=text1.value;
// }

//   3- use of event litener

let text1 = document.querySelector('#entertext')
document.querySelector('.btn').addEventListener('click', showmsg)
const messageEl =document.querySelector('.msg')
function showmsg(){
messageEl.textContent=text1.value;
}
