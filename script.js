// 10 second timer 
var timeEl = document.querySelector(".time");


var mainEl = document.getElementById("main");

var secondsLeft = 30;

function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft +  "";

    if(secondsLeft === 0) {
    
      clearInterval(timerInterval);
  
      sendMessage();
    }

  }, 1000);
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
setTime();

