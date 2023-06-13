let bodyE1 = document.body
let switchE1 = document.querySelector('.switch')
let activeTheme = localStorage.getItem('Theme')
if(activeTheme) {
    bodyE1.classList.add('dark')}
    switchE1.addClass('click',function(){
        bodyE1.classList.toggle('dark')
        if(bodyE1.classList.contains('dark')){
            localStorage.setItem('theme', 'dark');
        }
        else{
            localStorage.removeItem('theme');
        }
    })