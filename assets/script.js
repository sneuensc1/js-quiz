let highScores = localStorage.getItem("quizScores");
if (highScores === null) {
    highScores = [];
}
else {
    highScores = JSON.parse(highScores);
}

//variable to store count
var remainingTime = 75;
//Variable to track whether time is running or not
var isStopped = true;
//set starting quesiton to 0
var currentQuestion = 0
var questions = document.getElementById("questions");
var verify = document.getElementById("verify-response");
var scoreList = document.getElementById("high-score-list");

//add functionality to the radio buttons
var radios = document.querySelectorAll("input[type='radio']");

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
        document.querySelector(".show-question").classList.remove("show-question");
        document.getElementById("score-scn").classList.remove("hidden");
        clearInterval(timer);
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

//function to begin the quiz
var startQuiz = function() {
    startTimer();
    currentQuestion = 0;
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;}
    document.getElementById("title-page").classList.add("hidden");
    //add class to li
    questions.children[currentQuestion].classList.add("show-question");
}

//add functionality to the start button
document.getElementById("start").addEventListener("click", startQuiz);

var radioClick = function(event) {
    questions.children[currentQuestion].classList.remove("show-question");
    if (currentQuestion < 4) {
        currentQuestion++;
        console.log(currentQuestion)
        questions.children[currentQuestion].classList.add("show-question");
    }
    else {
        stopTimer();
        document.getElementById("score-scn").classList.remove("hidden");
    }
    if (event.target.dataset.correct === "1") {
        verify.innerText = "Correct";
    }
    else {
        remainingTime -= 10;
        verify.innerText = "Incorrect";
    }
}

//for loop for radio buttons
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", radioClick);
}

//add functionality to the start button
var submitButton = document.getElementById("submit-btn");

var displayScores = function () {
    var scoreLis = "";
    for (var i = 0; i < highScores.length; i++) {
        scoreLis += "<li>" + highScores[i].name + "" + highScores[i].time + "</li>";
    }
    scoreList.innerHTML = scoreLis;
}

var compareQuizScores = function (a,b) {
    if (a.time < b.time) {
       return 1; 
    } else {
        return -1;
    }
}

var saveScore = function() {
    var scoreNameInput = document.querySelector("#name").value;
    var scoreNumber = remainingTime;
    var quizScore = {"name": scoreNameInput, "time": scoreNumber }
    highScores.push(quizScore);
    highScores.sort(compareQuizScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayScores();
    verify.innerText = ""
    document.getElementById("score-scn").classList.add("hidden");
    document.getElementById("high-scores").classList.remove("hidden");
}

//add event to button
submitButton.addEventListener("click", saveScore);

var resetButton = document.getElementById("reset-btn");

var resetQuiz = function() {
    document.getElementById("high-scores").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    resetTimer();
}

resetButton.addEventListener("click", resetQuiz)

var clearButton = document.getElementById("clear-btn");

//add the functionality
var clearScores = function () {
    localStorage.setItem("quizScores", JSON.stringify([]));
    scoreList.innerHTML = "";
    highScores = [];
}

clearButton.addEventListener("click", clearScores)