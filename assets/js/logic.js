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

function questionClick(){
    if(this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

    if(time < 0) {
        time = 0;
    }
    timerElement.textContent = time;

    feedBackElement.textContent = "Wrong"
    sfxWrong.play();
    } else {
        sfxRight.play();
        feedBackElement.textContent = "Correct!";
    }
}

function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`
        choiceButton.addEventListener("click", questionClick);

        choicesElement.appendChild(choiceButton);
    })
}

function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

function clockTick(){
    time--;
    timerElement.textContent = time;

    if(time <= 0){
        quizEnd();
        }
}
//function of behaviour when user selects start button on the index.html webpage
function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);

    timerElement.textContent = time;

    getQuestion();
}

function saveHighScore(){

}

function checkForEnter(event){

}


//Add event listeners for starting quiz, submiting answers:
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);