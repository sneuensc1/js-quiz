//variable to store count
var remainingTime = 75;

//Variable to track whether time is running or not
var isStopped = true;




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

