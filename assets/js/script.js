var startButton = document.getElementById("start-button");
var goAway = document.getElementById("go-away");
var question = document.getElementById("question");
var buttons = document.querySelectorAll("answerButton");
var answer1 = document.getElementById("op1")
var answer2 = document.getElementById("op2")
var answer3 = document.getElementById("op3")
var answer4 = document.getElementById("op4")
var buttonArr = [answer1, answer2, answer3, answer4];
console.log(buttonArr[0]);
var answersDiv = document.getElementById("answers");
var timer = document.getElementById("time");
var questionArr = ["What is a bird?"];
var answerArr = ["Drone", "Dinosaur", "Deez", "Your mom"];
var quizOver = 0;
var secondsLeft = 60;
var correctAnswer = "";

function goQuiz() {
    goAway.setAttribute("style", "display:none");
    var quiz = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Seconds left: " + secondsLeft;
        if (secondsLeft === 0) {
            quizOver++;
        }
    }, 1000);
        question.textContent = questionArr[0];
        correctAnswer = answerArr[0];
        for (var i = 0; i < 4; i++) {
            console.log(i);
            console.log(buttonArr[i]);
            buttonArr[i].textContent = answerArr[i];
        }
}

startButton.addEventListener("click", function() {
    startButton.setAttribute("style", "display:none");
    timer.textContent = "Seconds left: " + secondsLeft;
    answer1.setAttribute("style", "display:flex");
    answer2.setAttribute("style", "display:flex");
    answer3.setAttribute("style", "display:flex");
    answer4.setAttribute("style", "display:flex");
    goQuiz();
})