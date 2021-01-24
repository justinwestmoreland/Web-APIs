// set all my variables to link to my HTML document here
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var scoreCount = document.querySelector(".score-count");
var questionAsked = document.getElementById("question");
var placeHolder1 = document.getElementById("placeholder1");
var placeHolder2 = document.getElementById("placeholder2");
var answers = document.querySelector("#answers");
var displayBox = document.getElementById("display-box");
var finalScore = document.querySelector('#final-score');
var finalScoreText = document.querySelector('#final-score-text');

// setting the rest of the global variables for the below functions
var timerCount;
var qIndex = 0;
var timer;
var score = 0;
scoreCount.textContent = "-";


// quiz is started by clicking the start button initiated by an event listener at the bottom of the code. This startQuiz function sets the timer count, 
// disables the start button from being clicked again, starts the timer, renders a question and answers, and hides the placeholder text that renders on
// the screen to explain the rules.
function startQuiz() {
    timerCount = 60;
    startButton.disabled = true;
    startTimer();
    askQuestion();
    placeHolder1.textContent = "";
    placeHolder2.textContent = "";
}

// this function starts the timer, sets the interval to count down by 1 number every 1000ms, and clears the timer if the number gets to (or below) zero. 
// it also sets the text content of my timer element to whatever my timer count is. 
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            timerElement.textContent = 0;
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// my array of questions that are rendered by my askquestion function
var questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["A. <js>", "B. <javascript>", "C. <script>", "D. <scripting>"],
        correctAnswer: "C. <script>"
    },
    {
        question: "Which built-in method returns the length of the string?",
        answers: ["A. length()", "B. size()", "C. index()", "D. width()"],
        correctAnswer: "A. length()"
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        answers: ["A. <script src=”geek.js”>", "B. <script href=”geek.js”>", "C. <script ref=”geek.js”>", "D. <script name=”geek.js”>"],
        correctAnswer: "A. <script src=”geek.js”>"
    },
    {
        question: "In JavaScript an _____ can be used to store multiple values in a single variable.",
        answers: ["A. array", "B. sun ray", "C. death ray", "D. HTML"],
        correctAnswer: "A. array"
    },
]

//created a variable for current question that is set to the question index position in the array
var currentQuestion = questions[qIndex];


// this function renders the questions from the above array. a new div is created for each answer in the array. event listener deterimines the correct answer by
// comparing the value of the object that is clicked to the value in the array stored as correctAnswer. 
function askQuestion() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    currentQuestion = questions[qIndex];
    //added this for correct answer
    setTimeout(function() {
        displayBox.textContent = "";
    }, 1000);
    questionAsked.textContent = currentQuestion.question;
    currentQuestion.answers.forEach(function(answer) {
        var answerDiv = document.createElement("div");
        answerDiv.textContent = answer;
        answerDiv.addEventListener("click", clickFunction);
        answers.append(answerDiv);
    });
}

// if there are questions left to ask and the question is answered, regardless if correct or not, we will call askQuestion and render another question. If there are
// no other questions to ask, we call endGame.
function clickFunction() {
    qIndex = qIndex + 1;
    if (qIndex < questions.length && this.textContent === currentQuestion.correctAnswer) {
        score = score + 100;
        displayBox.textContent = "Correct!"
        askQuestion();
    } else if (qIndex === questions.length && this.textContent === currentQuestion.correctAnswer) {
        score = score + 100;
        displayBox.textContent = "Correct!"
        endGame();
    } else if (qIndex < questions.length && this.textContent !== currentQuestion.correctAnswer) {
        timerCount = timerCount - 10;
        displayBox.textContent = "Incorrect";
        askQuestion();
    } else if (qIndex === questions.length && this.textContent !== currentQuestion.correctAnswer) {
        timerCount = timerCount - 10;
        displayBox.textContent = "Incorrect";
        endGame();
    }
}

// at the end of the game, we zero out all the divs that pertained to asking questions and send our score to local storage. We also zero out our timer and display 
// the block for the player to enter their initials and score. 
function endGame() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    displayBox.textContent = "";
    questionAsked.innerHTML = "";
    initialsBox.style.display = 'block';
    timerCount = 0;
    localStorage.setItem("score", score);
    finalScoreText.textContent = "Your Final Score is:";
    finalScore.textContent = localStorage.getItem("score");
};


// this connects the initials and score box to the HTML page. Initials are stored in local stoarage to be displayed on the Leaderboard Page
var initialsBox = document.querySelector("#initials-box");
var initialsDisplay = initialsBox.style.display;
var initialsInput = document.querySelector("#initials");
var initialsArray = [];

function storeInitials() {
    localStorage.setItem("initials", JSON.stringify(initialsArray));
}
initialsBox.addEventListener("submit", function(event) {
    event.preventDefault();
    var initialsText = initialsInput.value.trim();
    if (initialsText === "") {
        return;
    }
    initialsArray.push(initialsText);
    initialsInput.value = "";
    storeInitials();
    window.location.href = "highscores.html";
});




startButton.addEventListener("click", startQuiz);

// I need to store initials in local storage and attach them to the high scores from the quiz

//render Initials and high scores from local storage to a list item on the high score page

//do your read me page