"use strict";

let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = (message) => {
  document.querySelector(".message").innerText = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    displayMessage("0️⃣ No Number!");
    // when user enter the number other than 1 to 20
  } else if (guess < 1 || guess > 20) {
    displayMessage("❌ Please enter number between 1 to 20!");
  }
  // when the player wins
  else if (guess === secretNumber) {
    score++;
    document.querySelector(".number").innerText = secretNumber;
    displayMessage("✅ Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".score").innerText = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerText = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High! " : "📉 Too Low! ");
      score--;
      document.querySelector(".score").innerText = score;
    } else {
      displayMessage("❌ You lost the game! ");
      document.querySelector(".score").innerText = 0;
    }
  }
});

//For reset the game

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").innerText = score;
  document.querySelector(".number").innerText = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
