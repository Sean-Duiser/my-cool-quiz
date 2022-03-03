var mainMenuEl = document.querySelector('#mainMenu');
var quizEl = document.querySelector('#quiz');
var leaderboardEl = document.querySelector('#leaderboard');
var timerEl = document.querySelector('.timer');
var myQuestionsEl = document.querySelector('#myQuestions');
var titleEl = document.querySelector('.title');
var scoresEl = document.querySelector('#highScores');
var headerEl = document.querySelector('header');


var logScore = document.querySelector('#initials');
logScore.addEventListener('click', function() {
    localStorage.setItem('score', secondsLeft);
});

function displayScores() {
    var lastScore = JSON.parse(localStorage.getItem("score"));
    if (lastScore !== null) {
        document.getElementById('scores').appendChild(lastScore);
    }
}

var startBtn = document.querySelector('#start');

var secondsLeft = 10;
var cursor = 0;
var score = secondsLeft;

var quizAnswers = [
    [
        "Mars",
        "Saturn",
        "France",
        "Earth",
    ],
    [
        "364",
        "365",
        "367",
        "366",
    ],
    [
        "Zebra",
        "Skunk",
        "Striped Hyena",
        "Tiger",
    ],
    [
        "New York Giants",
        "Carolina Panthers",
        "Green Bay Packers",
        "Miami Dolphins",
    ],
];
var quizQuestions = [
    "What planet do we live on?",
    "How many days are in a Leap Year?",
    "Which animal has stripes on its skin as well as its fur?", 'Which NFL team achieved the "Perfect Season" in 1972?',
];

// instructor assisted with for loop
function showAnswer() {
    var myAnswer = quizAnswers[cursor];

    for (var i = 0; i < myAnswer.length - 1; i++) {
        var responses = myAnswer[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = responses;
        answerBtn.addEventListener('click', function () {
            secondsLeft--
        });
        quizEl.appendChild(answerBtn);
    };

    var correctAnswerBtn = document.createElement('button');
    correctAnswerBtn.textContent = myAnswer[3];
    correctAnswerBtn.addEventListener('click', function () {
        cursor++;
        if (cursor < quizAnswers.length) {
            quizEl.innerHTML = "";
            myQuestionsEl.innerHTML = "";
            showAnswer();
            showQuestion();
        } else {
            scoreScreen();
        }
    });
    quizEl.appendChild(correctAnswerBtn);
};

function showQuestion() {
    var nowQuestion = quizQuestions[cursor];
    var liveQuestion = document.createElement('h2');
    liveQuestion.textContent = nowQuestion;
    myQuestionsEl.appendChild(liveQuestion);
}

// instructor assisted
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
        if (cursor >= quizQuestions.length) {
            clearInterval(timeInterval);
        }
    }, 1000);
};

// this will display if the timer reaches 0
function sendMessage() {
    titleEl.textContent = "";
    timerEl.textContent = "Time is up! Game Over!";
    mainMenuEl.style.display = "none";
    quizEl.style.display = "none";
    leaderboardEl.style.display = "none";
    myQuestionsEl.style.display = "none";

};

// this is the function that displays the quiz screen
function mainMenu() {
    mainMenuEl.style.display = "block";
    quizEl.style.display = "none";
    leaderboardEl.style.display = "none";
    myQuestionsEl.style.display = "none";
};

// this is the function that displays the quiz screen
function quizScreen() {
    mainMenuEl.style.display = "none";
    quizEl.style.display = "block";
    leaderboardEl.style.display = "none";
    myQuestionsEl.style.display = "block";
};

// this is the function that displays the scoreboard
function scoreScreen() {
    mainMenuEl.style.display = "none";
    quizEl.style.display = "none";
    leaderboardEl.style.display = "block";
    myQuestionsEl.style.display = "none";
};

// starts the quiz when you click the start button
startBtn.addEventListener('click', showAnswer);
startBtn.addEventListener('click', showQuestion);
startBtn.addEventListener('click', quizScreen);
startBtn.addEventListener('click', setTime)

// command to boot up the game
function bootUp() {
    mainMenu();
};

bootUp();