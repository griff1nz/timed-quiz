var startButton = document.getElementById("start-button");
var goAway = document.getElementById("go-away");
var question = document.getElementById("question");
var answer1 = document.getElementById("op1");
var answer2 = document.getElementById("op2");
var answer3 = document.getElementById("op3");
var answer4 = document.getElementById("op4");
var statuss = document.getElementById("status");
var functionArray = [questionn, decoyCall, questionnn, decoyCall, questionnnn, decoyCall, questionnnnn, decoyCall, decoyCall, decoyCall,  endQuiz, decoyCall, decoyCall, decoyCall, decoyCall]; //https://stackoverflow.com/questions/4908378/javascript-array-of-functions
var correctAnswer;
var buttonArr = [answer1, answer2, answer3, answer4];
var answersDiv = document.getElementById("answers");
var timer = document.getElementById("time");
var answerArr;
var quizOver = 0;
var secondsLeft = 60;
var questionCount = 0;

function decoyCall() {
    console.log("The check() function runs an extra time for each question, so I put a bunch of decoy calls in the array to prevent errors. Might fix later");
}

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
    statuss.setAttribute("style", "display:inline");
    var displayTimeout = setInterval(function() {
        seconds--;
        if (seconds === 0) {
            statuss.setAttribute("style", "display:none");
            clearInterval(displayTimeout);
        }
    }, 1000)

}

function check(answerToCheck, theAnswer) {
    if (answerToCheck === theAnswer) {
        statuss.textContent = "Right!";
        display();
        functionArray.shift()(); //This function runs an extra time for each question, so I put a bunch of decoy calls in the array to prevent errors. Might fix later
    }
    else {
        statuss.textContent = "Wrong!";
        display();
        functionArray.shift()();
    }
}

function endQuiz() {
    question.textContent = "LMFAO!!!!";
    answersDiv.innerHTML = "";
}

function firstQuestion() {
    
    question.textContent = "What does HTML stand for?";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Making Links"];
    correctAnswer = "HyperText Markup Language";
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * answerArr.length)
        var randomAns = answerArr[randomNum];
        buttonArr[i].textContent = randomAns;
        answerArr.splice(randomNum, 1);
    }
    for (var i = 0; i < 4; i++) {
        const what = buttonArr[i].textContent; //It took me an embarrassingly long time to figure out that using a var instead of a const would allow every instance of "what" to be modified, so I had ot use const in order to prevent that from happening. 
       buttonArr[i].addEventListener("click", function() {
        check(what, correctAnswer)
       });
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
        answerArr.splice(randomNum, 1);
    }
    for (var i = 0; i < 4; i++) {
        const what1 = buttonArr[i].textContent;
       buttonArr[i].addEventListener("click", function() {
        check(what1, correctAnswer)
       });
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
        answerArr.splice(randomNum, 1);
    }
    for (var i = 0; i < 4; i++) {
        const what2 = buttonArr[i].textContent;
       buttonArr[i].addEventListener("click", function() {
        check(what2, correctAnswer)
       });
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
        answerArr.splice(randomNum, 1);
    }
    for (var i = 0; i < 4; i++) {
        const what3 = buttonArr[i].textContent;
       buttonArr[i].addEventListener("click", function() {
        check(what3, correctAnswer)
       });
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
        answerArr.splice(randomNum, 1);
    }
    for (var i = 0; i < 4; i++) {
        const what4 = buttonArr[i].textContent;
       buttonArr[i].addEventListener("click", function() {
        check(what4, correctAnswer)
       });
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
})