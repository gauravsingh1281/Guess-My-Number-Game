"use strict";

const message = document.querySelector(".message");
const showScore = document.querySelector(".score");
const showSecretNumber = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const showHighScore = document.querySelector(".highscore");
const randomNo = () => Math.floor(Math.random() * 20) + 1;
const secretNumber = randomNo();
let score = 20;
let highScore = 0;
showSecretNumber.textContent = secretNumber;

btnCheck.addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);
  if (!userInput) {
    message.textContent = "⛔ No Number!";
  } else if (userInput === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    score++;
    showScore.textContent = score;
  } else if (userInput > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too High!";
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = "😭 You lost the game";
      showScore.textContent = 0;
    }
  } else if (userInput < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too Low!";
      score--;
      showScore.textContent = score;
    } else {
      message.textContent = "😭 You lost the game";
      showScore.textContent = 0;
    }
  } else {
    message.textContent = "❌ Invalid Input!";
  }
});
