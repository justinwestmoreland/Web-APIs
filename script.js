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
var qIndex;
var timer;
// Start button, event listener will trigger timer to start AND first quiz question to pop up
var score = 0;


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
        question: "The correct Answer to this Question is 1",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 1"
    },
    {
        question: "The correct Answer to this Question is 2",
        answers: ["11111111", "222222", "3333333", "444444"],
        correctAnswer: "222222"
    },
    {
        question: "The correct Answer to this Question is 3",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 3"
    },
    {
        question: "The correct Answer to this Question is 4",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 4"
    },
]
var qIndex = 0;
var currentQuestion = questions[qIndex];


function askQuestion() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    currentQuestion = questions[qIndex];
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
        askQuestion();

    } else if (qIndex = questions.length && this.textContent === currentQuestion.correctAnswer) {
        score = score + 100;
        endGame();
    } else if (this.textContent !== currentQuestion.correctAnswer) {
        timerCount = timerCount - 10;
    }
}

function endGame() {
    scoreCount.textContent = score;
    answers.innerHTML = "";
    questionAsked.innerHTML = "Game OVER!";

}

startButton.addEventListener("click", startQuiz);