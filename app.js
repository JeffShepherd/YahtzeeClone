//
// set variables//
// 
let rollsLeft = 3;

let ones = twos = threes = threes = fours = fives = sixes = 0;
let topSum = [ones.value, twos.value, threes.value, fours.value, fives.value, sixes.value];

function scoreAdd() {

  ones.value = document.getElementById("oneTop");
  twos = document.getElementById("twoTop").value;
  threes = document.getElementById("threeTop").value;
  fours = document.getElementById("fourTop").value;
  fives = document.getElementById("fiveTop").value;
  sixes = document.getElementById("sixTop").value;


};

document.querySelector(".addScoresButton").addEventListener("click", function () {

  scoreAdd();

});









//on click of roll button: generate random numbers 1-6 and show corresponding dice png//

document.querySelector(".rollButton").addEventListener("click", function () {

  if (rollsLeft > 0) {
    if (document.querySelector(".btnHoldOne").classList.contains("btn-secondary")) {
      var dice1 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dice-1").style.display = "block";
      document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    };
    if (document.querySelector(".btnHoldTwo").classList.contains("btn-secondary")) {
      var dice2 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dice-2").style.display = "block";
      document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    };
    if (document.querySelector(".btnHoldThree").classList.contains("btn-secondary")) {
      var dice3 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dice-3").style.display = "block";
      document.getElementById("dice-3").src = "dice-" + dice3 + ".png";
    };
    if (document.querySelector(".btnHoldFour").classList.contains("btn-secondary")) {
      var dice4 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dice-4").style.display = "block";
      document.getElementById("dice-4").src = "dice-" + dice4 + ".png";
    };
    if (document.querySelector(".btnHoldFive").classList.contains("btn-secondary")) {
      var dice5 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dice-5").style.display = "block";
      document.getElementById("dice-5").src = "dice-" + dice5 + ".png";
    };

    // 3. deduct 1 from roll count
    rollsLeft--;

  } else {

    document.querySelector(".rollButton").classList.toggle("btn-dark");
    document.querySelector(".rollButton").classList.toggle("btn-light");
    document.querySelector(".nextTurnButton").classList.toggle("btn-warning");
    document.querySelector(".nextTurnButton").classList.toggle("btn-light");
  }

});


// next turn button action, which allows more rolls//
document.querySelector('.nextTurnButton').addEventListener('click', function () {

  reset();

});


// button action for new game//
document.querySelector(".newGameButton").addEventListener("click", function () {
  reset();
  //   // add score reset logic
});



// hold button class toggles //
// first hold button
document.getElementById("btnHoldOne").addEventListener("click", function () {
  document.querySelector(".btnHoldOne").classList.toggle("btn-primary");
  document.querySelector(".btnHoldOne").classList.toggle("btn-secondary");
});
// second hold button
document.getElementById("btnHoldTwo").addEventListener("click", function () {
  document.querySelector(".btnHoldTwo").classList.toggle("btn-primary");
  document.querySelector(".btnHoldTwo").classList.toggle("btn-secondary");
});
// third hold button
document.getElementById("btnHoldThree").addEventListener("click", function () {
  document.querySelector(".btnHoldThree").classList.toggle("btn-primary");
  document.querySelector(".btnHoldThree").classList.toggle("btn-secondary");
});
// fourth hold button
document.getElementById("btnHoldFour").addEventListener("click", function () {
  document.querySelector(".btnHoldFour").classList.toggle("btn-primary");
  document.querySelector(".btnHoldFour").classList.toggle("btn-secondary");
});
// fifth hold button
document.getElementById("btnHoldFive").addEventListener("click", function () {
  document.querySelector(".btnHoldFive").classList.toggle("btn-primary");
  document.querySelector(".btnHoldFive").classList.toggle("btn-secondary");
});
/////////////

// function to reset rollsleft to 3 and reset roll/next turn buttons //
function reset() {

  rollsLeft = 3;

  if (document.querySelector(".rollButton").classList.contains("btn-dark")) {
    document.querySelector(".rollButton").classList.toggle("btn-dark");
    document.querySelector(".rollButton").classList.toggle("btn-light");
    document.querySelector(".nextTurnButton").classList.toggle("btn-warning");
    document.querySelector(".nextTurnButton").classList.toggle("btn-light");
  };

  var dice1 = dice2 = dice3 = dice4 = dice5 = 6;

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

  resetHoldButtons();

};

// hold button deactivate //
function resetHoldButtons() {

  if (document.querySelector(".btnHoldOne").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldOne").classList.toggle("btn-primary");
    document.querySelector(".btnHoldOne").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldTwo").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldTwo").classList.toggle("btn-primary");
    document.querySelector(".btnHoldTwo").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldThree").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldThree").classList.toggle("btn-primary");
    document.querySelector(".btnHoldThree").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldFour").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldFour").classList.toggle("btn-primary");
    document.querySelector(".btnHoldFour").classList.toggle("btn-secondary");
  };

  if (document.querySelector(".btnHoldFive").classList.contains("btn-primary")) {
    document.querySelector(".btnHoldFive").classList.toggle("btn-primary");
    document.querySelector(".btnHoldFive").classList.toggle("btn-secondary");
  };

};