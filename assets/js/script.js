//initialize variables
var startButton = document.getElementById("start-button");
var goAway = document.getElementById("go-away");
var question = document.getElementById("question");
//creates buttons for answers
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var viewScore = document.getElementById("viewScores");
//shows if the answer is right or wrong
var statuss = document.getElementById("rightorwrong");
//very creative function naming
var functionArr = [questionn, questionnn, questionnnn, questionnnnn, endQuiz];
var correctAnswer;
var buttonArr = [answer1, answer2, answer3, answer4];
var answersDiv = document.getElementById("answers");
var timer = document.getElementById("time");
var stopQuiz;
//get and initialize local storage variables
var initials = localStorage.getItem("initials");
if (initials === null) {
    initials = "";
}
var highScore = localStorage.getItem("highScore");
if (highScore === null) {
    highScore = 0;
}
else {
    highScore = parseInt(highScore);
}
var answerArr;
var secondsLeft = 60;

//Displays high score when clicked
function displayHighScore() {
    var highScoreDisplay = document.createElement("p");
    highScoreDisplay.textContent = initials + ": " + highScore;
    document.getElementById("footer").appendChild(highScoreDisplay);
}

viewScore.addEventListener("click", function() {
    displayHighScore();
})

function timerStart() {
    goAway.setAttribute("style", "display:none");
    var quiz = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Seconds left: " + secondsLeft;
        if (secondsLeft <= 0 || stopQuiz === 1) {
            clearInterval(quiz);
            endQuiz();
        }
    }, 1000);
    firstQuestion();       
}

function display() {
    //changes the text to be visible for a second
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
        display();
        //removes all buttons
        for (var i = 0; i < 4; i++) {
            buttonArr[i].remove();
        }
        //runs the next function in functionArr
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
    stopQuiz = 1;
    finalScore = secondsLeft;
    question.textContent = "Congrats! Your score is " + finalScore + "!";
    answersDiv.innerHTML = "";
    //shows message if it is a new high score
    if (finalScore > highScore) {
        highScore = finalScore;

        localStorage.setItem("highScore", highScore);
        question.textContent += "\n You set a new high score! Enter your initials:"
        
    }
     //secondsLeft would always decrease by one more after secondsLeft took the value
    question.textContent += " Enter your initials:"
    var inputInitials = document.createElement("input");
    answersDiv.appendChild(inputInitials);
    var inputButton = document.createElement("button");
    inputButton.textContent = "Submit";
    inputButton.setAttribute("style", "margin-top:10px");
    inputButton.addEventListener("click", function() {
        initials = inputInitials.value;
        localStorage.setItem("initials", initials);
        answersDiv.innerHTML = initials + ": " + finalScore;
    });
    answersDiv.appendChild(inputButton);
}
for (var i = 0; i < 4; i++) {
    const index = i;
   buttonArr[i].addEventListener("click", function() {
    check(index);
    
   });
   
}

function firstQuestion() {
    
    question.textContent = "What does HTML stand for?";
    answerArr = ["HyperText Markup Language", "High-Temp Meat Loaf", "Home Tool Markup Language", "Hyper Text Multiple Language"];
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
   
    question.textContent = "In CSS and JavaScript, lines must be ended with a: ";
    answerArr = ["Semicolon", "Colon", "Slash", "Curly Bracket"];
    correctAnswer = "Semicolon";
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
    
    question.textContent = "Commonly used data types do NOT include: ";
    answerArr = ["Strings", "Alerts", "Numbers", "Booleans"];
    correctAnswer = "Alerts";
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
    question.textContent = "Arrays in JavaScript can be used to hold: ";
    answerArr = ["Other Arrays", "Numbers and Strings", "Booleans", "All of the Above"];
    correctAnswer = "All of the Above";
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
    
    question.textContent = "String values must be enclosed in ______ when being assigned to variables.";
    answerArr = ["Quotation Marks", "Square Brackets", "Parentheses", "Angle Brackets"];
    correctAnswer = "Quotation Marks";
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

//add the event listener
startButton.addEventListener("click", function() {
    startButton.setAttribute("style", "display:none");
    timer.textContent = "Seconds left: " + secondsLeft;
    answer1.setAttribute("style", "display:flex");
    answer2.setAttribute("style", "display:flex");
    answer3.setAttribute("style", "display:flex");
    answer4.setAttribute("style", "display:flex");
    timerStart();
});