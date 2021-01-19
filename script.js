//variables go here
var startButton = document.querySelector(".start-button");
// the number that is displayed on the timer
var timerElement = document.querySelector(".timer-count");
// the variable that will count down
var timerCount;

var timer;

// Start button, event listener will trigger timer to start AND first quiz question to pop up
var startButton = document.querySelector(".start-button");


function startQuiz() {
    timerCount = 30;
    // prevent restart
    startButton.disabled = true;
    //call the function for the timer to start running
    // startTimer ();
    console.log("Start Button Works", timerCount);
    startTimer();
}

function startTimer() {
    //need to set the timer as we did in the word search game
    timer = setInterval(function () {
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











startButton.addEventListener("click", startQuiz);