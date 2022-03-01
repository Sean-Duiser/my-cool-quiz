console.log("JavaScript is working!");

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 1000;

var goBtn = document.querySelector('#go');

var myQuestions = {
    questionOne: "How are you?",
    questionTwo: "What year is it?",
    questionThree: "Is fire hot?",
    questionFour: "Are you cold?"
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


// this hides the start screen and starts the question
function displayQuestionOne() {
    document.getElementById('play').style.display = 'none';
    
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ1')
    questionTime.innerHTML = myQuestions.questionOne;
    document.body.appendChild(questionTime);
    console.log(questionTime);
    
    // creates another div so I can append my answers to my question
    var answersOne = document.createElement('div');
    var answerOneKey = ["good", "bad", "tired", "hungry"];
    answersOne.innerHTML = answerOneKey;
    document.body.appendChild(answersOne);
    console.log(answersOne);
    
    // this begins the count down
    setTime();
    displayQuestionTwo();
    displayQuestionThree();
    displayQuestionFour();
};

function displayQuestionTwo() {
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ2')
    questionTime.innerHTML = myQuestions.questionTwo;
    document.body.appendChild(questionTime);
    console.log(questionTime);

    // creates another div so I can append my answers to my question
    var answersTwo = document.createElement('div');
    var answerTwoKey = ["1972", "2022", "1991", "457 B.C."];
    answersTwo.innerHTML = answerTwoKey;
    document.body.appendChild(answersTwo);
    console.log(answersTwo);
};

function displayQuestionThree() {
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ3')
    questionTime.innerHTML = myQuestions.questionThree;
    document.body.appendChild(questionTime);
    console.log(questionTime);

    // creates another div so I can append my answers to my question
    var answersThree = document.createElement('div');
    questionTime.setAttribute('id', 'divQ4')
    var answerThreeKey = ["1972", "2022", "1991", "457 B.C."];
    answersThree.innerHTML = answerThreeKey;
    document.body.appendChild(answersThree);
    console.log(answersThree);
};

function displayQuestionFour() {
    // creates a div so that I can append my question to the body
    var questionTime = document.createElement('div');
    questionTime.setAttribute('id', 'divQ4')
    questionTime.innerHTML = myQuestions.questionFour;
    document.body.appendChild(questionTime);
    console.log(questionTime);

    // creates another div so I can append my answers to my question
    var answersFour = document.createElement('div');
    var answerFourKey = ["1972", "2022", "1991", "457 B.C."];
    answersFour.innerHTML = answerFourKey;
    document.body.appendChild(answersFour);
    console.log(answersFour);
};


document.getElementById('go').addEventListener('click', displayQuestionOne);