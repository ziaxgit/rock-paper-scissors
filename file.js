function validate() {
  let input = document.querySelector("input");
  input.value = input.value.replace(/[^a-zA-Z]+/, "");
}
function startGameFunc() {
  let gameplayScreen = document.querySelector("#gameplay-screen");
  gameplayScreen.style.marginTop = "10vh";
  gameplayScreen.style.display = "block";

  let topContainer = document.querySelector(".container-top");
  topContainer.style.display = "none";

  let welcomeMsg = document.querySelector("p");
  let value = document.querySelector("input").value.toUpperCase();
  let userName = document.querySelector(
    ".container-gameplay .container-user p"
  );
  if (value) {
    welcomeMsg.innerHTML = `Welcome ${value},  first to 5 points wins!`;
    userName.innerHTML = value;
  } else {
    welcomeMsg.innerHTML = `Welcome Stranger,  first to 5 points wins!`;
    userName.innerHTML = "STRANGER";
  }
  document.querySelector(".footer").style.visibility = "hidden";
  return;
}
let userScore = 0;
let compScore = 0;

function winAnimation() {
  document.querySelector(".container-user").style.background = "green";
  setTimeout(function () {
    document.querySelector(".container-user").style.background = "transparent";
  }, 700);
  document.querySelector(".container-computer").style.background = "red";
  setTimeout(function () {
    document.querySelector(".container-computer").style.background =
      "transparent";
  }, 700);
}

function loseAnimation() {
  document.querySelector(".container-user").style.background = "red";
  setTimeout(function () {
    document.querySelector(".container-user").style.background = "transparent";
  }, 700);
  document.querySelector(".container-computer").style.background = "green";
  setTimeout(function () {
    document.querySelector(".container-computer").style.background =
      "transparent";
  }, 700);
}

function tieAnimation() {
  document.querySelector(".container-gameplay").style.background = "white";
  setTimeout(function () {
    document.querySelector(".container-gameplay").style.background =
      "transparent";
  }, 700);
}

function playerSelection(playerSelection) {
  let welcomeMsg = document.querySelector("p");
  let value = document.querySelector("input").value.toUpperCase();

  let userImgTag = document.querySelector(
    ".container-style.container-user img"
  );
  if (playerSelection === "R") {
    userImgTag.src = "resources/rock1.png";
  } else if (playerSelection === "P") {
    userImgTag.src = "resources/paper1.png";
  } else if (playerSelection === "S") {
    userImgTag.src = "resources/scissors1.png";
  }

  let arrOfChoice = ["R", "P", "S"];
  let compChoice = arrOfChoice[Math.floor(Math.random() * 3)];

  let compImgTag = document.querySelector(
    ".container-style.container-computer img"
  );
  if (compChoice === "R") {
    compImgTag.src = "resources/rock1.png";
  } else if (compChoice === "P") {
    compImgTag.src = "resources/paper1.png";
  } else if (compChoice === "S") {
    compImgTag.src = "resources/scissors1.png";
  }
  let userScoreTag = document.querySelector(
    ".container-style.container-user #user-score"
  );

  // this block is for messages of who won the round
  if (playerSelection === compChoice) {
    tieSound();
    welcomeMsg.innerHTML = "It's a tie!";
    tieAnimation();
  } else if (compChoice === "S" && playerSelection === "R") {
    winSound();
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
  } else if (compChoice === "R" && playerSelection === "P") {
    winSound();
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
  } else if (compChoice === "P" && playerSelection === "S") {
    winSound();
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
  } else {
    welcomeMsg.innerHTML = `Point goes to computer!`;
    loseSound();
    compScore += 1;
    loseAnimation();
  }

  userScoreTag.innerHTML = "Score: " + userScore;
  let compScoreTag = document.querySelector(
    ".container-style.container-computer #computer-score"
  );
  compScoreTag.innerHTML = "Score: " + compScore;

  if (userScore === 5) {
    winnerScreen();
  }

  if (compScore === 5) {
    loserScreen();
  }
  return playerSelection;
}

function winSound() {
  let audio = new Audio("resources/sounds_won-round.wav");
  audio.play();
}

function loseSound() {
  let audio = new Audio("resources/sounds_lost-round.wav");
  audio.play();
}

function tieSound() {
  let audio = new Audio("resources/sounds_tie-round.wav");
  audio.play();
}

const winningMessages = [
  "Rock and roll, you've crushed it!",
  "Paper covers rock, but you've covered them all!",
  "Scissor me timbers, you've sliced through the competition!",
  "Rock solid performance, my friend!",
  "You proved your brain is smarter than that computer's!",
];

// Array of losing messages for Rock, Paper, Scissors
const losingMessages = [
  "In this game, you either rock or you paper...or you lose.",
  "Paper: 1, Rock: 0, You: Still awesome!",
  "Scissors are too sharp for you today. Better luck next time!",
  "Looks like your game plan was a little rocky!",
  "Rock and roll? More like rock and lose!",
];

const randomWinningMessage =
  winningMessages[Math.floor(Math.random() * winningMessages.length)];
const randomLosingMessage =
  losingMessages[Math.floor(Math.random() * losingMessages.length)];

function winnerScreen() {
  let winningMsg = document.querySelector(".winner h1");
  winningMsg.innerHTML = randomWinningMessage;
  let gameplayScreen = document.querySelector("#gameplay-screen");
  gameplayScreen.style.display = "none";
  let winnerScreen = document.querySelector(".winner");
  winnerScreen.style.display = "flex";
  document.querySelector(".footer").style.visibility = "visible";
  let audio = new Audio("resources/happy-happy-cat.mp3");
  audio.play();
}

function loserScreen() {
  let losingMsg = document.querySelector(".loser h1");
  losingMsg.innerHTML = randomLosingMessage;
  let gameplayScreen = document.querySelector("#gameplay-screen");
  gameplayScreen.style.display = "none";
  let loserScreen = document.querySelector(".loser");
  loserScreen.style.display = "flex";
  document.querySelector(".footer").style.visibility = "visible";
  let audio = new Audio("resources/banana-cat-crying.mp3");
  audio.play();
}

function reloadFunc() {
  location.reload();
}
