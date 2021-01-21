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
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var timer;
// Start button, event listener will trigger timer to start AND first quiz question to pop up
var startButton = document.querySelector(".start-button");
var score = 0;
scoreCount.textContent = score;



function startQuiz() {
    timerCount = 60;
    // prevent restart
    startButton.disabled = true;
    //call the function for the timer to start running
    // startTimer ();
    console.log("Start Button Works", timerCount);
    startTimer();
    quizQuestions();
    placeHolder1.textContent = "";
    placeHolder2.textContent = "";

}

function startTimer() {
    //need to set the timer as we did in the word search game
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            // endQuiz();  ********** when the timer hits zero you will need this function to pop up the high scores and end the game. Not sure how to do this yet
        }

    }, 1000);
    console.log("Timer is started");
}
// make an array of 4-5 questions here, don't be shy. We will put the text content into the questions once we get the functionality to work. 
// var questions = ["The correct Answer to this Question is A", "The correct Answer to this Question is B", "The correct Answer to this Question is C", "The correct Answer to this Question is D"];

var questions = [{
        question: "The correct Answer to this Question is 1",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "a"
    },

    {
        question: "The correct Answer to this Question is 2",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "b"
    },

    {
        question: "The correct Answer to this Question is 3",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "c"
    },

    {
        question: "The correct Answer to this Question is 4",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "d"
    },

]

function wrongAnswer() {
    console.log("WRONG!");
}

// Display the questions here and hide the placeholders

function quizQuestions() {

    question0()

    function question0() {
        questionAsked.textContent = questions[0].question;
        answer1.textContent = questions[0].answers[0];
        answer2.textContent = questions[0].answers[1];
        answer3.textContent = questions[0].answers[2];
        answer4.textContent = questions[0].answers[3];

        // var correctAnswer = answer1

        // function chooseAnswer() {
        //     if (answer1) {
        //         question2();
        //     }
        //     if (answer2 || answer3 || answer4) {
        //         console.log("wrong, dummy");
        //     }
        // }

        answer1.addEventListener("click", question1);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", wrongAnswer);

    }

    function question1() {
        questionAsked.textContent = questions[1].question;
        answer1.textContent = questions[1].answers[0];
        answer2.textContent = questions[1].answers[1];
        answer3.textContent = questions[1].answers[2];
        answer4.textContent = questions[1].answers[3];

        answer1.addEventListener("click", logEvent);

        var logEvent = console.log("What is this doing?");

        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", question2);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", wrongAnswer);

    }

    function question2() {
        questionAsked.textContent = questions[2].question;
        answer1.textContent = questions[2].answers[0];
        answer2.textContent = questions[2].answers[1];
        answer3.textContent = questions[2].answers[2];
        answer4.textContent = questions[2].answers[3];

        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", question3);
        answer4.addEventListener("click", wrongAnswer);

    }

    function question3() {
        questionAsked.textContent = questions[3].question;
        answer1.textContent = questions[3].answers[0];
        answer2.textContent = questions[3].answers[1];
        answer3.textContent = questions[3].answers[2];
        answer4.textContent = questions[3].answers[3];

        answer1.addEventListener("click", wrongAnswer);
        answer2.addEventListener("click", wrongAnswer);
        answer3.addEventListener("click", wrongAnswer);
        answer4.addEventListener("click", finalScore);
    }

    function addScore() {
        score + "20";

    }

    function finalScore() {
        console.log("Game Over");
    }

    // ** I'm pretty sure I can minimize this code with a for loop
    // var choices = []
    // for (var i = 0; i < answers.length; i++) {
    //     choices = questions[0].answers[i];
    //     answer1.textContent = choices;
    //     choices.push(answers[i]);

    // }

    // answer1.textContent = question[0].answers[0];
    // answer2.textContent = question[0].answer2;
    // answer3.textContent = question[0].answer3;
    // answer4.textContent = question[0].answer4;



}












startButton.addEventListener("click", startQuiz);