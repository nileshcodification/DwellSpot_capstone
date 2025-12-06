let email=document.getElementById("email");
let error=document.getElementById("email.Error");

email.addEventListener('input',function(){
    if (email.value.includes("@")){
        error.textContent="";
    }
    else{
        error.textContent="Invalid Email"
    }

})