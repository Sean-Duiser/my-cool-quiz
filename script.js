var mainMenuEl = document.querySelector('#mainMenu');
var quizEl = document.querySelector('#quiz');
var leaderboardEl = document.querySelector('#leaderboard');
var timerEl = document.querySelector('#timer');
var myQuestionsEl = document.querySelector('#myQuestions');

var logScore = document.querySelector('#initials');
var startBtn = document.querySelector('#start');

var secondsLeft = 1000;
var cursor = 0;

var myQuestions = [
    {
        text: "What planet do we live on?",
        answers: [
            "Earth",
            "Mars",
            "Saturn",
            "France",
        ],
        correct: 1
    },
    {
        text: "How many days are in a Leap Year?",
        answers: [
            "364",
            "365",
            "366",
            "367",
        ],
        correct: 3
    },
    {
        text: "Which animal has stripes on its skin as well as its fur?",
        answers: [
            "Zebra",
            "Skunk",
            "Striped Hyena",
            "Tiger",
        ],
        correct: 4
    },
    {
        text: 'Which NFL team achieved the "Perfect Season" in 1972?',
        answers: [
            "Miami Dolphins",
            "New York Giants",
            "Carolina Panthers",
            "Green Bay Packers",
        ],
        correct: 1
    }
];

// instructor assisted
function showQuestion() {
    var myQuestion = myQuestions[cursor];

    for (var i = 0; i < myQuestion.answers.length; i++) {
        var item = myQuestion.answers[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = i + 1 + ". " + item;
        quizEl.appendChild(answerBtn);
    }
};

// instructor assisted
function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";

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
};

// this is the function that displays the quiz screen
function quizScreen() {
    mainMenuEl.style.display = "none";
    quizEl.style.display = "block";
    leaderboardEl.style.display = "none";
};

// this is the function that displays the scoreboard
function scoreScreen() {
    mainMenuEl.style.display = "none";
    quizEl.style.display = "none";
    leaderboardEl.style.display = "block";
};

// command to boot up the game
function bootUp() {
    mainMenu();
};

// starts the quiz when you click the start button
startBtn.addEventListener('click', showQuestion);

// moves to the next question
quizEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        console.log(event.target);
        cursor++;
        if (cursor < myQuestions.length) {
            showQuestion();
        } else {
        scoreScreen();
        }
    }
})

// bootUp();