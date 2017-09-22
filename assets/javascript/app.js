//this code handles the start button
$('#start-button').on('click', function() {
	location.href = 'file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/index.html';
})

//this code handles the timer
var number = 70;
var intervalId;

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#show-time").html("<h4>Time Remaining:<br><br>" + number + " seconds</h4>");
  if (number === 0) {
    stop();
    alert("Time's Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();