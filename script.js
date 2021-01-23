//variables go here
var startButton = document.querySelector(".start-button");
// the number that is displayed on the timer
var timerElement = document.querySelector(".timer-count");
// the variable that will count down
var scoreCount = document.querySelector(".score-count");
var timerCount;
var questionAsked = document.getElementById("question");
var placeHolder1 = document.getElementById("placeholder1");
var placeHolder2 = document.getElementById("placeholder2");
var answers = document.querySelector("#answers");
var qIndex = 0;
var timer;
var displayBox = document.getElementById("display-box");
// Start button, event listener will trigger timer to start AND first quiz question to pop up
var score = 0;
scoreCount.textContent = "-";



function startQuiz() {
    timerCount = 60;
    // prevent restart
    startButton.disabled = true;
    //call the function for the timer to start running
    // startTimer ();
    console.log("Start Button Works", timerCount);
    startTimer();
    askQuestion();
    placeHolder1.textContent = "";
    placeHolder2.textContent = "";

}

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
    console.log("Timer is started");
}

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
var currentQuestion = questions[qIndex];

function askQuestion() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    currentQuestion = questions[qIndex];
    //added this for correct answer
    console.log(questions);
    console.log(qIndex);

    questionAsked.textContent = currentQuestion.question;
    currentQuestion.answers.forEach(function(answer) {
        var answerDiv = document.createElement("div");
        answerDiv.textContent = answer;
        answerDiv.addEventListener("click", clickFunction);
        answers.append(answerDiv);
    });
}

function clickFunction() {
    qIndex = qIndex + 1;
    if (qIndex < questions.length && this.textContent === currentQuestion.correctAnswer) {
        score = score + 100;
        displayBox.textContent = "Correct!"
        setTimeout(function() {
            displayBox.textContent = "";
        }, 1000);
        askQuestion();

    } else if (qIndex === questions.length && this.textContent === currentQuestion.correctAnswer) {
        score = score + 100;
        displayBox.textContent = "Correct!"
        setTimeout(function() {
            displayBox.textContent = "";
        }, 1000);
        endGame();


    } else if (qIndex < questions.length && this.textContent !== currentQuestion.correctAnswer) {
        timerCount = timerCount - 10;
        displayBox.textContent = "Incorrect";
        setTimeout(function() {
            displayBox.textContent = "";
        }, 1000);
        askQuestion();
    } else if (qIndex = questions.length && this.textContent !== currentQuestion.correctAnswer) {
        timerCount = timerCount - 10;
        displayBox.textContent = "Incorrect";
        setTimeout(function() {
            displayBox.textContent = "";
        }, 1000);
        endGame();
    }
}

function endGame() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    questionAsked.innerHTML = "Game OVER!";
    timerCount = 0;
}

startButton.addEventListener("click", startQuiz);