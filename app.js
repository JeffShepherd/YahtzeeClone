
//
// set variables and call function for fresh scoreboard//

// initializeGame();

var rollsLeft = 3;

//on click of roll button: generate random numbers 1-6 and show corresponding dice png//

document.querySelector(".rollButton").addEventListener("click", function() {

if (rollsLeft > 0) {
// 1. generate random numbers
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
var dice3 = Math.floor(Math.random() * 6) + 1;
var dice4 = Math.floor(Math.random() * 6) + 1;
var dice5 = Math.floor(Math.random() * 6) + 1;
var dice6 = Math.floor(Math.random() * 6) + 1;

// 2. display result
document.getElementById("dice-1").style.display = "block";
document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
document.getElementById("dice-2").style.display = "block";
document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
document.getElementById("dice-3").style.display = "block";
document.getElementById("dice-3").src = "dice-" + dice3 + ".png";
document.getElementById("dice-4").style.display = "block";
document.getElementById("dice-4").src = "dice-" + dice4 + ".png";
document.getElementById("dice-5").style.display = "block";
document.getElementById("dice-5").src = "dice-" + dice5 + ".png";
document.getElementById("dice-6").style.display = "block";
document.getElementById("dice-6").src = "dice-" + dice6 + ".png";

// 3. deduct 1 from roll count
rollsLeft--;

} else {
// document.querySelector(".rollButton").style.display = 'none';
document.querySelector(".rollButton").classList.toggle("active");
}

});



// button action for next turn which allows more rolls//
document.querySelector('.nextTurnButton').addEventListener('click', function(){
  var rollsLeft = 3;
  document.querySelector(".rollButton").classList.toggle("active");
});
// 1. reset rollsLeft
// var rollsLeft = 3;



// button action for new game//
// document.querySelector('.newGameButton').addEventListener('click', initializeGame);


// function to set reset all scoring and initialize new game//
// function initializeGame() {

//var rollsLeft = 3;
//
// };