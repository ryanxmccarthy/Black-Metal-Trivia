var correctAnswers = ['Venom', 'Gaahl', 'Abigail Williams', 'Under the Sign of the Pentagram', 'Fenriz', 'Marduk', 'Inn i de dype skogers favn', 'Leukemia', 'Krieg', 'Satanael'];

//this handles the start button
$('#start-button').on('click', function() {
	location.href = 'file:///Users/ryanxmccarthy/Documents/unc-bootcamp/homework/trivia-game/questions.html';
})

//this handles the timer
var number = 100;
var intervalId;

function decrement() {
  number--;
  $("#show-time").html("<h4>Time Remaining:<br><br>" + number + " seconds</h4>");
  if (number === 0) {
    stop();
    alert("Time's Up!");
    $('.hidden').removeClass('hidden');
  }
}

function run() {
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  clearInterval(intervalId);
}

run();

//this handles the finish button
$('#finish-button').on('click', function() {
  $('.hidden').removeClass('hidden');
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
      document.getElementById('correct').innerHTML = correct;
      document.getElementById('incorrect').innerHTML = 10 - correct;
    }
  }
});


