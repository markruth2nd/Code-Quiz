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
