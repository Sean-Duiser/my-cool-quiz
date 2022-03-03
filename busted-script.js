var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var playTime = document.getElementById("play");
var endgameEl = document.getElementById("endgame");
var questionsEl = document.querySelector('#questions');
var secondsLeft = 1000;

endgameEl.style.display = 'none';
var goBtn = document.querySelector('#go');
var cursor = 0;

// array containing each question and answer for easy access
var myQuestions = [
    {
        text: "What planet do we live on?",
        answersOne: [
            "Earth",
            "Mars",
            "Saturn",
            "France",
        ],
        correct: 1
    },
    {
        text: "How many days are in a Leap Year?",
        answersTwo: [
            "364",
            "365",
            "366",
            "367",
        ],
        correct: 3
    },
    {
        text: "Which animal has stripes on its skin as well as its fur?",
        answersThree: [
            "Zebra",
            "Skunk",
            "Striped Hyena",
            "Tiger",
        ],
        correct: 4
    },
    {
        text: 'Which NFL team achieved the "Perfect Season" in 1972?',
        answersFour: [
            "Miami Dolphins",
            "New York Giants",
            "Carolina Panthers",
            "Green Bay Packers",
        ],
        correct: 1
    }
];

// this hides the start screen and starts the question
function displayQuestionOne() {
    endgameEl.style.display = 'none'
    playTime.style.display = 'none';

    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ1');
    questionTime.innerHTML = myQuestions[0][0];
    document.body.appendChild(questionTime);

    // creates another div so I can append my answers to my question
    var optionsOne = document.createElement('div');
    optionsOne.setAttribute('id', 'divA1');
    optionsOne.innerHTML = myQuestions[0][1];
    document.body.appendChild(optionsOne);

    // this begins the count down
    setTime();
    //showQuestion();
};

function displayQuestionTwo() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ1').style.display = 'none';
    document.getElementById('divA1').style.display = 'none';

    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ2')
    questionTime.innerHTML = myQuestions[1][0];
    document.body.appendChild(questionTime);

    // creates another div so I can append my answers to my question
    var optionsTwo = document.createElement('div');
    optionsTwo.setAttribute('id', 'divA2');
    optionsTwo.innerHTML = myQuestions[1][1];
    document.body.appendChild(optionsTwo);

    showQuestion();
};

function displayQuestionThree() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ2').style.display = 'none';
    document.getElementById('divA2').style.display = 'none';

    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ3')
    questionTime.innerHTML = myQuestions[2][0];
    document.body.appendChild(questionTime);

    // creates another div so I can append my answers to my question
    var optionsThree = document.createElement('div');
    optionsThree.setAttribute('id', 'divA3')
    optionsThree.innerHTML = myQuestions[2][1];
    document.body.appendChild(optionsThree);

    showQuestion();
};

function displayQuestionFour() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ3').style.display = 'none';
    document.getElementById('divA3').style.display = 'none';

    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ4')
    questionTime.innerHTML = myQuestions[3][0];
    document.body.appendChild(questionTime);

    // creates another div so I can append my answers to my question
    var optionsFour = document.createElement('div');
    optionsFour.setAttribute('id', 'divA4');
    optionsFour.innerHTML = myQuestions[3][1];
    document.body.appendChild(optionsFour);

    endGame()
};

function endGame() {
    endgameEl.style.display = 'block'
    document.getElementById('divQ4').style.display = 'none';
    document.getElementById('divA4').style.display = 'none';

    var endScreen = document.createElement('div');
    endScreen.setAttribute('id', 'divEnd');
    var endMessage = "Thank you for taking the quiz. Log your initials above!";
    endScreen.innerHTML = endMessage;
    document.body.appendChild(endScreen);
    var leaderboard = document.createElement('div');
    leaderboard.setAttribute('id', 'leaderboard');
    document.body.appendChild(leaderboard);

};

function showQuestion() {
    var myQuestion = myQuestions[cursor];

    for (var i = 0; i < myQuestion.possible.length; i++) {
        var item = myQuestion.possible[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = i + 1 + ". " + item;
        quizEl.appendChild(answerBtn);
    }
}

// this is the function for the timer to count down
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
    timeEl.textContent = "Time is up! Game Over!";
}

document.getElementById('go').addEventListener('click', displayQuestionOne);

playTime.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        console.log(event.target);
        cursor++;
        if (cursor < myQuestions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }
});