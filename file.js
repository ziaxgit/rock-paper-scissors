function playOnClick() {
  alert("Rock, Paper, Scissors. LET'S GO!");
  console.log("");
  let obj = {
    R: "Rock",
    P: "Paper",
    S: "Scissors",
  };

  function getComputerChoice() {
    let arrOfChoice = ["R", "P", "S"];
    return arrOfChoice[Math.floor(Math.random() * 3)];
  }

  function getPlayerChoice() {
    let playerSelection = prompt(
      "Enter Rock(R), Paper(P), Scissors(S): "
    ).toUpperCase();
    while (
      playerSelection !== "R" &&
      playerSelection !== "P" &&
      playerSelection !== "S"
    ) {
      playerSelection = prompt(
        "ERROR! PLZ only Enter (R)-Rock (P)-Paper (S)-Scissors"
      ).toUpperCase();
    }
    return playerSelection;
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
        "The computer won. Get better!"
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
  let gamesToPlay;
  do {
    gamesToPlay = parseInt(prompt("Enter how many rounds to play: "));
  } while (!Number(gamesToPlay));

  alert(game(gamesToPlay));
}
