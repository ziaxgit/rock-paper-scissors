function startGameFunc() {
  let gameplayScreen = document.querySelector("#gameplay-screen");
  console.log(gameplayScreen);
  gameplayScreen.style.marginTop = "10vh";
  gameplayScreen.style.visibility = "visible";

  let topContainer = document.querySelector(".container-top");
  topContainer.style.display = "none";

  let welcomeMsg = document.querySelector("p");
  let value = document.querySelector("input").value.toUpperCase();
  console.log(value);
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
  return;
}
let userScore = 0;
let compScore = 0;
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
  if (playerSelection === compChoice) {
    welcomeMsg.innerHTML = "It's a tie!";
  } else if (compChoice === "S" && playerSelection === "R") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
  } else if (compChoice === "R" && playerSelection === "P") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
  } else if (compChoice === "P" && playerSelection === "S") {
    welcomeMsg.innerHTML = `Point goes to ${value ? value : "Stranger"}!`;
    userScore += 1;
  } else {
    welcomeMsg.innerHTML = `Point goes to computer!`;
    compScore += 1;
  }

  userScoreTag.innerHTML = "Score: " + userScore;
  console.log(userScoreTag);
  let compScoreTag = document.querySelector(
    ".container-style.container-computer #computer-score"
  );
  compScoreTag.innerHTML = "Score: " + compScore;

  let gameplayScreen = document.querySelector("#gameplay-screen");

  if (userScore === 5) {
    let winnerScreen = document.querySelector(".winner");
    gameplayScreen.style.display = "none";
    winnerScreen.style.visibility = "visible";
  }

  var isTouch =
    !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

  if (!isTouch) {
    
  }
  return playerSelection;
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
