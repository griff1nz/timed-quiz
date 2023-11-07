var startButton = document.getElementById("start-button");
var goAway = document.getElementById("go-away");
var question = document.getElementById("question");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var statuss = document.getElementById("rightorwrong");
var functionArr = [questionn, questionnn, questionnnn, questionnnnn, endQuiz];
var answersCorrect = 0;
var checkIndex = 0;
var theScore = document.getElementById("score");
var correctAnswer;
var buttonArr = [answer1, answer2, answer3, answer4];
var answersDiv = document.getElementById("answers");
var timer = document.getElementById("time");
var answerArr;
var quizOver = 0;
var secondsLeft = 60;
var questionCount = 0;


function timerStart() {
    goAway.setAttribute("style", "display:none");
    var quiz = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Seconds left: " + secondsLeft;
        if (secondsLeft === 0) {
            quizOver++;
        }
    }, 1000);
    firstQuestion();       
}
function display() {
    seconds = 1;
    statuss.setAttribute("style", "display: flex, width: 50%%, margin: 0 25% 0 25%, align-content: center, border-top: 3px solid black");
    var displayTimeout = setInterval(function() {
        seconds--;
        if (seconds === 0) {
            statuss.setAttribute("style", "display:none");
            clearInterval(displayTimeout);
        }
    }, 1000)

}

function check(number) {
    var dataToCheck = buttonArr[number].getAttribute('data-boolean');
    if (dataToCheck === 'true') {
        statuss.textContent = "Right!";
        answersCorrect++;
        display();
        for (var i = 0; i < 4; i++) {
            buttonArr[i].remove();
        }
        functionArr.shift() ();
        
    }
    else {
        statuss.textContent = "Wrong!";
        display();
        secondsLeft -= 10;
        for (var i = 0; i < 4; i++) {
            buttonArr[i].remove();
        }
        
        functionArr.shift() ();
    }
}

function endQuiz() {
    question.textContent = "Congrats! Your high score is " + answersCorrect;
    answersDiv.innerHTML = "";
}
for (var i = 0; i < 4; i++) {
    var dataState = buttonArr[i].getAttribute("data-boolean");
   buttonArr[i].addEventListener("click", function() {
    check(checkIndex);
    
   });
   checkIndex++;
}

function firstQuestion() {
    
    question.textContent = "What does HTML stand for?";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        buttonArr[i].setAttribute("data-boolean", "false");
        if (randomAns === correctAnswer) {
            buttonArr[i].setAttribute("data-boolean", "true")
        }
        answersDiv.appendChild(buttonArr[i]);
        answerArr.splice(randomNum, 1);
    }
    

}
function questionn() {
   
    question.textContent = "What the heck?";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        buttonArr[i].setAttribute("data-boolean", "false");
        if (randomAns === correctAnswer) {
            buttonArr[i].setAttribute("data-boolean", "true");
        }
        answersDiv.appendChild(buttonArr[i]);
        answerArr.splice(randomNum, 1);
    }
}
function questionnn() {
    
    question.textContent = "What the heck??";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        buttonArr[i].setAttribute("data-boolean", "false");
        if (randomAns === correctAnswer) {
            buttonArr[i].setAttribute("data-boolean", "true");
        }
        answersDiv.appendChild(buttonArr[i]);
        answerArr.splice(randomNum, 1);
    }
}
function questionnnn() {
    question.textContent = "What the heck???";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        buttonArr[i].setAttribute("data-boolean", "false");
        if (randomAns === correctAnswer) {
            buttonArr[i].setAttribute("data-boolean", "true");
        }
        answersDiv.appendChild(buttonArr[i]);
        answerArr.splice(randomNum, 1);
    }
}
function questionnnnn() {
    
    question.textContent = "What the heck????";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        buttonArr[i].setAttribute("data-boolean", "false");
        if (randomAns === correctAnswer) {
            buttonArr[i].setAttribute("data-boolean", "true");
        }
        answersDiv.appendChild(buttonArr[i]);
        answerArr.splice(randomNum, 1);
    }
}


startButton.addEventListener("click", function() {
    startButton.setAttribute("style", "display:none");
    timer.textContent = "Seconds left: " + secondsLeft;
    answer1.setAttribute("style", "display:flex");
    answer2.setAttribute("style", "display:flex");
    answer3.setAttribute("style", "display:flex");
    answer4.setAttribute("style", "display:flex");
    timerStart();
});