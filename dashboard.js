let interest = localStorage.getItem("interest");
let language = localStorage.getItem("language");
let experience = localStorage.getItem("experience");
let goal = localStorage.getItem("goal");

document.getElementById("profileInfo").innerHTML =
"Interest: " + interest + "<br>" +
"Language: " + language + "<br>" +
"Experience: " + experience;

document.getElementById("skills").innerHTML =
language + ", Problem Solving, Communication";

document.getElementById("career").innerHTML = goal;

let roadmap = "";

if(goal === "AI Engineer"){
roadmap =
"1. Learn Python <br> 2. Learn Data Structures <br> 3. Learn Machine Learning <br> 4. Build AI Projects";
}

else if(goal === "Web Developer"){
roadmap =
"1. Learn HTML CSS <br> 2. Learn JavaScript <br> 3. Learn React <br> 4. Build Web Projects";
}

else if(goal === "Cyber Security Analyst"){
roadmap =
"1. Learn Networking <br> 2. Learn Ethical Hacking <br> 3. Learn Security Tools";
}

else{
roadmap =
"1. Learn Java/Kotlin <br> 2. Learn Android Studio <br> 3. Build Mobile Apps";
}

document.getElementById("roadmap").innerHTML = roadmap;

function logout(){
localStorage.clear();
window.location.href="index.html";
}