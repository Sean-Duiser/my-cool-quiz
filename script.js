console.log("JavaScript is working!")

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 10;

function setTime() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining"

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
    } , 1000);
}

function sendMessage() {
    timeEl.textContent = "Time is up! Game Over!";
}

setTime();