var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var playTime = document.getElementById("play");
var endgameEl = document.getElementById("endgame");
var secondsLeft = 1000;

endgameEl.style.display = 'none';
var goBtn = document.querySelector('#go');

// questions for my quiz
var questionOne="What planet do we live on?";
var questionTwo="How many days are in a Leap Year?";
var questionThree ="Which animal has stripes on its skin as well as its fur?";
var questionFour='Which NFL team achieved the "Perfect Season" in 1972?';

// array containing each question for easy access
var myQuestions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour
]

// answers to each of my questions
var myAnswers = {
        answersOne: [
            "Earth",
            "Mars",
            "Saturn",
            "France"
        ],
        answersTwo: [
            "364",
            "365",
            "366",
            "367"
        ],
        answersThree: [
            "Zebra",
            "Skunk",
            "Striped Hyena",
            "Tiger"
        ],
        answersFour:  [
            "Miami Dolphins",
            "New York Giants",
            "Carolina Panthers",
            "Green Bay Packers"
        ]
};

// this hides the start screen and starts the question
function displayQuestionOne() {
    endgameEl.style.display = 'none'
    playTime.style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ1');
    questionTime.innerHTML = questionOne;
    document.body.appendChild(questionTime);
    
    // creates another div so I can append my answers to my question
    var optionsOne = document.createElement('div');
    optionsOne.setAttribute('id', 'divA1');
    optionsOne.innerHTML = myAnswers.answersOne;
    document.body.appendChild(optionsOne);
    
    // this begins the count down
    setTime();
    displayQuestionTwo();
};

function displayQuestionTwo() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ1').style.display = 'none';
    document.getElementById('divA1').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ2')
    questionTime.innerHTML = questionTwo;
    document.body.appendChild(questionTime);
    
    // creates another div so I can append my answers to my question
    var optionsTwo = document.createElement('div');
    optionsTwo.setAttribute('id', 'divA2');
    optionsTwo.innerHTML = myAnswers.answersTwo;
    document.body.appendChild(optionsTwo);
    
    displayQuestionThree();
};

function displayQuestionThree() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ2').style.display = 'none';
    document.getElementById('divA2').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ3')
    questionTime.innerHTML = questionThree;
    document.body.appendChild(questionTime);
    
    // creates another div so I can append my answers to my question
    var optionsThree = document.createElement('div');
    optionsThree.setAttribute('id', 'divA3')
    optionsThree.innerHTML = myAnswers.answersThree;
    document.body.appendChild(optionsThree);
    
    displayQuestionFour();
};

function displayQuestionFour() {
    endgameEl.style.display = 'none'
    document.getElementById('divQ3').style.display = 'none';
    document.getElementById('divA3').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ4')
    questionTime.innerHTML = questionFour;
    document.body.appendChild(questionTime);
    
    // creates another div so I can append my answers to my question
    var optionsFour = document.createElement('div');
    optionsFour.setAttribute('id', 'divA4');
    optionsFour.innerHTML = myAnswers.answersFour;
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

// this is the function for the timer to count down
function setTime() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
    } , 1000);
}

// this will display if the timer reaches 0
function sendMessage() {
    timeEl.textContent = "Time is up! Game Over!";
}

document.getElementById('go').addEventListener('click', displayQuestionOne);