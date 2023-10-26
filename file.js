function startGameFunc() {
  let value = document.querySelector("input").value.toUpperCase();
  console.log(value);
  let userName = document.querySelector(
    ".container-gameplay .container-user p"
  );
  userName.innerHTML = value;
  let welcomeMsg = document.querySelector("p");
  welcomeMsg.innerHTML = `Welcome ${value},  first to 5 points wins!`;
  console.log(welcomeMsg);
}
function getPlayerChoice(idOfMove) {
  // whichever image player clicks, store it in a variable
  let userImgTag = document.querySelector(
    ".container-style.container-user img"
  );
  if (idOfMove === "R") {
    userImgTag.src = "resources/rock1.png";
  } else if (idOfMove === "P") {
    userImgTag.src = "resources/paper1.png";
  } else if (idOfMove === "S") {
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

  return playerSelection;
}
function playOnClick() {
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
    if (playerSelection === computerSelection) {
      return "tie";
    } else if (computerSelection === "S" && playerSelection === "R") {
      return "player";
    } else if (computerSelection === "R" && playerSelection === "P") {
      return "player";
    } else if (computerSelection === "P" && playerSelection === "S") {
      return "player";
    } else {
      return "computer";
    }
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
