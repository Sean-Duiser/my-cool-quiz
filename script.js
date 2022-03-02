var mainMenuEl = document.querySelector('#mainMenu');
var quizEl = document.querySelector('#quiz');
var leaderboardEl = document.querySelector('#leaderboard');
var timerEl = document.querySelector('#timer');
var myQuestionsEl = document.querySelector('#myQuestions');

var logScore = document.querySelector('#initials');
var startBtn = document.querySelector('#start');

var secondsLeft = 1000;
var cursor = 0;

var quizAnswers = [
    [
        "Earth",
        "Mars",
        "Saturn",
        "France",
    ], [
        "364",
        "365",
        "366",
        "367",
    ], [
        "Zebra",
        "Skunk",
        "Striped Hyena",
        "Tiger",
    ], [
        "Miami Dolphins",
        "New York Giants",
        "Carolina Panthers",
        "Green Bay Packers",
    ],
];


var quizQuestions = [
    "What planet do we live on?",
    "How many days are in a Leap Year?",
    "Which animal has stripes on its skin as well as its fur?", 'Which NFL team achieved the "Perfect Season" in 1972?',];

// instructor assisted
function showAnswer() {
    var myAnswer = quizAnswers[cursor];

    for (var i = 0; i < myAnswer.length; i++) {
        var responses = myAnswer[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = i + 1 + ". " + responses;
        quizEl.appendChild(answerBtn);
    }
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

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
    }, 1000);
};

// this will display if the timer reaches 0
function sendMessage() {
    timerEl.textContent = "Time is up! Game Over!";
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

// moves to the next question
quizEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        console.log(event.target);
        cursor++;
        if (cursor < quizAnswers.length) {
            showAnswer();
        } else {
            scoreScreen();
        }
    }
});

// command to boot up the game
function bootUp() {
    mainMenu();
};

bootUp();