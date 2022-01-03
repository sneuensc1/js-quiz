//variable to store count
var remainingTime = 75;
//Variable to track whether time is running or not
var isStopped = true;

//pull up the question id
//var questionList = getElementById("questions");

let currentQuestion = 0;



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
startButton.onclick = startTimer;

//var startQuiz pulls startTimer and sets the first question to visible

//submit logs your initials and score in localStorage

//radio buttons 

//on start set the current to 0 (the first one)
//Display the current question by adding a class
//On an answer:
//- verify if its right



//- If it's not subtract 10 seconds from the timer 
//- hide the current question
//- update current to the next question
//- show the next question if there are more questions
//- record the score if there aren't

//var currentQuestion = 0; 
//Then when you want the li you can do questions.children[currentQuestion]
//And you can increase/decrease currentQuestion by 1 with ++ and --

const buttonContainer = document.querySelector(input[type="radio"]);
console.log('buttonContainer', buttonContainer);

buttonContainer.addEventListener('click', event => {
  console.log(event.target.value)
}) 


