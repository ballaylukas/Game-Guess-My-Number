"use strict";

// Variables
let secretNumber = calcSecretNumber();
let score = 20;
let highScore = 0;

// Functions
function calcSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Manipulating HTML
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

// Manipulating CSS
const displayBackground = function (background) {
  document.querySelector("body").style.backgroundColor = background;
};

const displayNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// Game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayNumber(secretNumber);

    displayBackground("#60b347");
    displayNumberWidth("30rem");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
      displayBackground("#943434");
    }
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = calcSecretNumber();

  displayMessage("Start guessing...");
  displayNumber("?");
  displayScore(score);
  document.querySelector(".guess").value = "";

  displayBackground("#222");
  displayNumberWidth("15rem");
});
