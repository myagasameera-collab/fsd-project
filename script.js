document.querySelector("form").addEventListener("submit", function(event){

event.preventDefault();

let email = document.querySelector("input[type='email']").value;
let password = document.querySelector("input[type='password']").value;

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if(email === savedEmail && password === savedPassword){

// check if THIS user completed questions
let questionsDone = localStorage.getItem(email + "_questions");

if(questionsDone === "yes"){
window.location.href = "dashboard.html";
}else{
window.location.href = "questions.html";
}

}
else{
alert("Invalid Email or Password");
}

});