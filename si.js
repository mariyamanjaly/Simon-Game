var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userPattern = []

var started = false
var level = 0;

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id")
  userPattern.push(userChosenColour);
  animatePress(userChosenColour);
  console.log("user pattern is: " + userPattern)
  checkAnswer(userPattern.length - 1)
})


function nextSequence() {

  userPattern = [];

  level++;
  $("#level-title").text("Level " + level);
 console.log(level)

  var r = Math.random();
  var randomNumber = Math.floor( r * 4);
  console.log(randomNumber)

  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);

  gamePattern.push(randomChosenColour)
  console.log( "game pattern is: " + gamePattern)

  $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);

}
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed")
      setTimeout(function (){
        $("#" + currentColour).removeClass("pressed");
      }, 100);
  }


$(document).on('keypress',function() {
  if(!started){
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    console.log("success");

    if(userPattern.length === gamePattern.length) {
      setTimeout(function (){
        nextSequence();
      },1000);
    }
  } else {
    console.log("wrong")
    $("#level-title").text("Game over , Press any key on keyboard to Restart");
    startOver();
  }
}

function startOver(){
   level = 0;
   gamePattern = [];
   started = false;
}
