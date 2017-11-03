var user = {
    name: "Grant Chirpus",
    email: "coolguy@gmail.com",
    password: "ILoveCoffee"
};


function checkLogin(){
    if(document.querySelectorAll("input")[0].value === user.email && document.querySelectorAll("input")[1].value === user.password){
        DisplaySwitch();
    }
    else {
        alert("Your sign-in credentials are incorrect");
    }
}


function DisplaySwitch(){
    document.querySelectorAll("#Welcome")[0].style.display = "block";
    document.querySelectorAll("#SignIn")[0].style.display = "none";
}

function returnToSignIn(){
    document.querySelectorAll("#SignIn")[0].style.display = "block";
    document.querySelectorAll("#Welcome")[0].style.display = "none";
}