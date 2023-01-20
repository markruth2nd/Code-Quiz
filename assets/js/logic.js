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

function startQuiz(){

}

function quizEnd(){

}

function clockTick(){

}

function saveHighScore(){

}

function checkForEnter(event){

}
