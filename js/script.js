function showMessage(){
    alert("Welcome to CampusCompanion!");
}

function submitForm(){
    alert("Message Sent Successfully!");
    return false;
}
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user && pass){
localStorage.setItem("student", user);
window.location="dashboard.html";
}
else{
alert("Enter Login Details");
}
}
window.onload = function(){
document.getElementById("loader").style.display="none";
};
