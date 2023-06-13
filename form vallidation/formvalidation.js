function validateform (){
var name =document.myform.username.value
var password = document.myform.password.value
var email = document.myform.email.value
var atposition = email.indexOf('@') ;
var dotpostion = email.indexOf('.');
if(name==null || name==""){
    alert("please enter your username")
    return ;
}
else if(password == null || password==""){
    alert("please enter your password")
    return ;
}
else if( password.length < 8 || isNaN(password) ){
    alert("please enter your password which should be at least 8 characters and numbers")
    isNaN(num)
    return ;
}
if(atposition <1 || dotpostion < atposition + 2 || dotpostion + 2 == email.length){
    alert("Please enter a valid email address which must contain one - @ and two - ." )
    return ;
}
}
