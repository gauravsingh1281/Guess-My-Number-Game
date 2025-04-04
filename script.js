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

btnCheck.addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!userInput) {
    message.textContent = "⛔ No Number!";

    // When player wins
  } else if (userInput === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    showSecretNumber.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    showSecretNumber.style.width = "30rem";
    // When user guess is too high
  } else if (userInput > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too High!";
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = "😭 You lost the game";
      showScore.textContent = 0;
    }
    // When user guess is too low
  } else if (userInput < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too Low!";
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = "😭 You lost the game";
      showScore.textContent = 0;
    }
    // When user enter invalid value other than 1 to 20
  } else {
    message.textContent = "❌ Invalid Input!";
  }
});

// restart game
restartGame.addEventListener("click", function () {
  secretNumber = randomNo();
  score = 20;
  document.querySelector(".guess").value = "";
  showScore.textContent = score;
  message.textContent = "Start guessing...";
  showSecretNumber.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  showSecretNumber.style.width = "15rem";
});
