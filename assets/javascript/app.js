var correctAnswers = ['Venom', 'Gaahl', 'Abigail Williams', 'Under the Sign of the Pentagram', 'Fenriz', 'Marduk', 'Inn i de dype skogers favn', 'Leukemia', 'Krieg', 'Satanael'];

//this handles the start button
$('#start-button').on('click', function() {
	location.href = 'file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/questions.html';
})

//this handles the timer
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
    window.location.href="file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/results.html";
  }
}

function stop() {
  clearInterval(intervalId);
}

run();

//this handles the finish button
$('#finish-button').on('click', function() {
	location.href = 'file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/results.html';
})

//this handles the restart button
$('#restart-button').on('click', function() {
	location.href = 'file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/questions.html';
})

//this handles the number of questions (in)correct
  var correct = 0;

$("input").on("click", function(event){
  selectedAnswer = $(this).val();
  for (var i = 0; i < correctAnswers.length; i++) {
    if(selectedAnswer === correctAnswers[i]) {
      correct++;
      console.log(correct);
    }
  }
});

$('#correct').text(correct)
$('#incorrect').text(10 - correct);





