let questions = [

{
question: "Which activity do you enjoy the most?",
options: ["Coding", "Designing", "Problem Solving", "Communication"]
},

{
question: "Which subject do you like most?",
options: ["Maths", "Computer Science", "Business", "Arts"]
},

{
question: "How comfortable are you with programming?",
options: ["Beginner", "Intermediate", "Advanced"]
},

{
question: "Do you enjoy working with data?",
options: ["Yes", "No", "Sometimes"]
},

{
question: "Do you prefer working alone or in a team?",
options: ["Alone", "Team", "Both"]
},

{
question: "What type of projects excite you?",
options: ["Web Development", "AI/ML", "Cyber Security", "Mobile Apps"]
},

{
question: "What are you aiming to become in the future?",
options: ["AI Engineer", "Software Developer", "Data Scientist", "Cyber Security Expert"]
},

{
question: "Final Question: What career are you interested in?",
options: ["Artificial Intelligence", "Data Science", "Web Development", "Cyber Security"]
}

];

let currentQuestion = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("questionText").innerText = q.question;

let optionsHTML = "";

q.options.forEach(function(option){

optionsHTML += `
<label>
<input type="radio" name="answer" value="${option}">
${option}
</label><br>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

}

function nextQuestion(){

let selected = document.querySelector("input[name='answer']:checked");

if(!selected){
alert("Please select an option");
return;
}

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}
else{

let email = localStorage.getItem("userEmail");

localStorage.setItem(email + "_questions","yes");

alert("Assessment Completed");

window.location.href = "dashboard.html";

}

}

loadQuestion();