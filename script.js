"use strict";

const message = document.querySelector(".message");
const showScore = document.querySelector(".score");
const showSecretNumber = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const showHighScore = document.querySelector(".highscore");
const restartGame = document.querySelector(".again");
const randomNo = () => Math.floor(Math.random() * 20) + 1;
let secretNumber = randomNo();
let score = 20;
let highScore = 0;

//To set message
const displayMessage = function (msg) {
  message.textContent = msg;
};
btnCheck.addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!userInput) {
    displayMessage("⛔ No Number!");
    // when user enter the number other than 1 to 20
  } else if (userInput < 1 || userInput > 20) {
    displayMessage("❌ Please enter number between 1 to 20!");
  }
  // When player wins
  else if (userInput === secretNumber) {
    displayMessage("🎉 Correct Number!");
    showSecretNumber.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    showSecretNumber.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      showHighScore.textContent = highScore;
    }

    // When user guess is wrong
  } else if (userInput !== secretNumber) {
    if (score > 1) {
      displayMessage(userInput > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      showScore.textContent = score;
    } else {
      displayMessage("😭 You lost the game");
      showScore.textContent = 0;
    }
  }
  // When user enter invalid value other than 1 to 20
  else {
    displayMessage("❌ Invalid Input!");
  }
});

// restart game
restartGame.addEventListener("click", function () {
  secretNumber = randomNo();
  score = 20;
  document.querySelector(".guess").value = "";
  showScore.textContent = score;
  displayMessage("Start guessing...");
  showSecretNumber.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  showSecretNumber.style.width = "15rem";
});
