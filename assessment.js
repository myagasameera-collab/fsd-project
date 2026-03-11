document.getElementById("assessmentForm").addEventListener("submit", function(event){

event.preventDefault();

let interest = document.getElementById("interest").value;
let language = document.getElementById("language").value;
let work = document.getElementById("work").value;
let experience = document.getElementById("experience").value;
let goal = document.getElementById("goal").value;

localStorage.setItem("interest", interest);
localStorage.setItem("language", language);
localStorage.setItem("work", work);
localStorage.setItem("experience", experience);
localStorage.setItem("goal", goal);

// mark assessment completed
localStorage.setItem("assessmentDone", "yes");

alert("Assessment Submitted");

window.location.href="dashboard.html";

});