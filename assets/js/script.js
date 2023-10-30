var startButton = document.getElementById("start-button");
var quizOption = document.createElement("button");
var goAway = document.getElementById("go-away");
var question = document.getElementById("question");

function goQuiz() {
    goAway.setAttribute("style", "display:none");
    question.textContent = "Lmfao";
}

startButton.addEventListener("click", function() {
    startButton.setAttribute("style", "display:none");
    goQuiz();
})