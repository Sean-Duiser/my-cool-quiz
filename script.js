var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var playTime = document.getElementById("play");
var secondsLeft = 1000;

var goBtn = document.querySelector('#go');

var questionOne="What planet do we live on?";
var questionTwo="How many days are in a Leap Year?";
var questionThree ="Which animal has stripes on its skin as well as its fur?";
var questionFour='Which NFL team achieved the "Perfect Season" in 1972?';

var myQuestions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour
]

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
    playTime.style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ1');
    questionTime.innerHTML = myQuestions.questionOne;
    document.body.appendChild(questionTime);
    console.log(questionTime);
    
    // creates another div so I can append my answers to my question
    var answersOne = document.createElement('div');
    answersOne.setAttribute('id', 'divA1');
    answersOne.innerHTML = questionUno.answers;
    document.body.appendChild(answersOne);
    console.log(answersOne);
    
    // this begins the count down
    setTime();
    displayQuestionTwo();
};

function displayQuestionTwo() {
    document.getElementById('divQ1').style.display = 'none';
    document.getElementById('divA1').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ2')
    questionTime.innerHTML = myQuestions.questionTwo;
    document.body.appendChild(questionTime);
    console.log(questionTime);
    
    // creates another div so I can append my answers to my question
    var answersTwo = document.createElement('div');
    answersTwo.setAttribute('id', 'divA2');
    answersTwo.innerHTML = questionDos.answers;
    document.body.appendChild(answersTwo);
    console.log(answersTwo);
    
    displayQuestionThree();
};

function displayQuestionThree() {
    document.getElementById('divQ2').style.display = 'none';
    document.getElementById('divA2').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ3')
    questionTime.innerHTML = myQuestions.questionThree;
    document.body.appendChild(questionTime);
    console.log(questionTime);
    
    // creates another div so I can append my answers to my question
    var answersThree = document.createElement('div');
    answersThree.setAttribute('id', 'divA3')
    var answerThreeKey = ["Yes", "No", "Probz", "No one really knows"];
    answersThree.innerHTML = questionTres.answers;
    document.body.appendChild(answersThree);
    console.log(answersThree);
    
    displayQuestionFour();
};

function displayQuestionFour() {
    document.getElementById('divQ3').style.display = 'none';
    document.getElementById('divA3').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ4')
    questionTime.innerHTML = myQuestions.questionFour;
    document.body.appendChild(questionTime);
    console.log(questionTime);
    
    // creates another div so I can append my answers to my question
    var answersFour = document.createElement('div');
    answersFour.setAttribute('id', 'divA4');
    var answerFourKey = ['Always', 'No', 'Wouldn\'t you like to know?', 'What does "cold" mean?'];
    answersFour.innerHTML = questionQuatro.answers;
    document.body.appendChild(answersFour);
    console.log(answersFour);
    
    endGame()
};

function endGame() {
    document.getElementById('divQ4').style.display = 'none';
    document.getElementById('divA4').style.display = 'none';
    
    var endScreen = document.createElement('div');
    endScreen.setAttribute('id', 'divEnd');
    var endMessage = "Thank you for taking the quiz. Log your initials below!";
    endScreen.innerHTML = endMessage;
    document.body.appendChild(endScreen);
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