// Variables to keep track of quiz state:
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//Add Elements from HTML files:
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");

//Added audio for correct & incorrect answer submissions:
let sfxRight = new Audio("assets/sfx/correct.wav");
let sfxWrong = new Audio("assets/sfx/incorrect.wav");

//Quiz fuctions:
function getQuestion(){

}

function questionClick(){

}

function clockTick(){

}
//function of behaviour when user selects start button on the index.html webpage
function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000)
}

function quizEnd(){

}



function saveHighScore(){

}

function checkForEnter(event){

}


//Add event listeners for starting quiz, submiting answers:
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);