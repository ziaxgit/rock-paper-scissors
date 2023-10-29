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
    welcomeMsg.innerHTML = "It's a tie!";
    tieAnimation();
    tieSound();
  } else if (compChoice === "S" && playerSelection === "R") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
    winSound();
  } else if (compChoice === "R" && playerSelection === "P") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
    winSound();
  } else if (compChoice === "P" && playerSelection === "S") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
    winAnimation();
    winSound();
  } else {
    welcomeMsg.innerHTML = `Point goes to computer!`;
    compScore += 1;
    loseAnimation();
    loseSound();
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

const winningMessages = [
  "Rock and roll, you've crushed it!",
  "Paper covers rock, but you've covered them all!",
  "Scissor me timbers, you've sliced through the competition!",
  "Rock solid performance, my friend!",
  "You proved your brain is smarter than the computers!",
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
  winningMsg.innerHTML = randomLosingMessage;
  let gameplayScreen = document.querySelector("#gameplay-screen");
  gameplayScreen.style.display = "none";
  let winnerScreen = document.querySelector(".winner");
  winnerScreen.style.display = "flex";
  document.querySelector(".footer").style.visibility = "visible";
  let audio = new Audio("resources/happy-happy-cat.mp3");
  audio.play();
  document.querySelector(".play-again").style.display = "block";
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
  document.querySelector(".play-again").style.display = "block";

  audio.play();
}

/* function playOnClick() {
  let obj = {
    R: "Rock",
    P: "Paper",
    S: "Scissors",
  };

  function getComputerChoice() {
    let arrOfChoice = ["R", "P", "S"];
    return arrOfChoice[Math.floor(Math.random() * 3)];
  }

  function playRound(playerSelection, computerSelection) {
   
  }

  function game(numOfRounds) {
    // should be 5 rounds
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= numOfRounds; i++) {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();

      const winnerOfRound = playRound(playerSelection, computerSelection);
      let roundDecision;
      if (winnerOfRound === "player") {
        roundDecision = "You win this round! :)";
        playerScore += 1;
      } else if (winnerOfRound === "computer") {
        roundDecision = "You lost this round :(";
        computerScore += 1;
      } else {
        i -= 1;
        roundDecision = "It's a tie!";
      }
      alert(
        "You choose: " +
          obj[playerSelection] +
          "\n" +
          "Computer choose: " +
          obj[computerSelection] +
          "\n" +
          "\n" +
          roundDecision +
          "\n" +
          "\n" +
          "Your score: " +
          playerScore +
          "\n" +
          "Computer score: " +
          computerScore
      );
    }

    if (playerScore > computerScore) {
      return (
        "Your score: " +
        playerScore +
        "\n" +
        "Computer score: " +
        computerScore +
        "\n" +
        "\n" +
        "Winner winner chicken dinner! :D"
      );
    } else if (computerScore > playerScore) {
      return (
        "Your score: " +
        playerScore +
        "\n" +
        "Computer score: " +
        computerScore +
        "\n" +
        "\n" +
        "Imagine losing to a computer lol skill issue"
      );
    } else {
      return (
        "Your score: " +
        playerScore +
        "\n" +
        "Computer score: " +
        computerScore +
        "\n" +
        "\n" +
        "It's a draw gg"
      );
    }
  }
  let gamesToPlay = parseInt(prompt("Enter number of rounds to play: "));
  while (!Number(gamesToPlay)) {
    gamesToPlay = parseInt(
      prompt("Stop messin around! \nEnter a valid number of rounds to play: ")
    );
  }

  alert(game(gamesToPlay));
}
 */
