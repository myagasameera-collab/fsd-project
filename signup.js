document.getElementById("signupForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("signupEmail").value;
let password = document.getElementById("signupPassword").value;

if(name === "" || email === "" || password === ""){
alert("Please fill all fields");
return;
}

// store user data in browser (demo purpose)
localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

alert("Signup Successful! Please Login");

window.location.href = "index.html";

});