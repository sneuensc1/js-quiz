//variable to store count
var remainingTime = 75;
//Variable to track whether time is running or not
var isStopped = true;

//set starting quesiton to 0
var currentQuestion = 0

var questions = document.getElementById("questions");

//add data attribute for correct answer
var rightAnswer = document.querySelector("#data-correct");

//Select countdown container
const countContainer = document.getElementById("countdown-number");

//function to display time
const renderTime = () => {
    //decrease time
    remainingTime -= 1;
    //render count on the screen
    countContainer.innerHTML = remainingTime;
    //timeout on zero
    if (remainingTime === 0) {
        isStopped = true;
        clearInterval(timer);
        remainingTime = 75;
    }
};

//function to start timer
const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        countContainer,innerHTML = remainingTime;
        timer = setInterval(renderTime, 1000);
    }
};

//function to stop timer
const stopTimer = () => {
    isStopped = true;
    if (timer) {
        clearInterval(timer);
    }
};

//function to reset timer
const resetTimer = () => {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 75;
    countContainer.innerHTML = remainingTime;
}

//add functionality to the start button
const startButton = document.getElementById("start");

//attach onclick event to button
startButton.onclick = startQuiz;

//isn't working
var radios = document.querySelectorAll("selector");
for (var i = 0; i < radios.length; i++) {
    const buttonContainer = document.querySelectorAll("input[type='radio']");
    console.log('buttonContainer', buttonContainer);
    buttonContainer.addEventListener('click', event => {
    console.log(event.target.value)
}) 
}

//isn't working
var startQuiz = function() {
    startTimer();
    div.classList.replace("visible", "hidden");
    //add li to show
    questions.children[currentQuestion];
    //add class to li
}

//- If it's not subtract 10 seconds from the timer 
//- hide the current question
//- update current to the next question
//- show the next question if there are more questions
//- record the score if there aren't
//And you can increase/decrease currentQuestion by 1 with ++ and --

//no idea if this works, the previous functions don't so I can't test it
var scoreNameInput = document.querySelector("input[name='name']").value;
var scoreNumber = remainingTime;
var scores = scoreNameInput, scoreNumber;

//add functionality to the start button
const submitButton = document.getElementById("submit");

//attach onclick event to button
submitButton.onclick = saveScore;

var saveScore = function() {
    localStorage.setItem("scores", JSON,stringify(scores));
}

var loadScores = function() {
    //moving to the last page needs to load these >> localStorage.getItem("scores");

//need a clear score button?? It has it in the example but not the instructions
//need a start over button, I'm wondering if button can go to reset()