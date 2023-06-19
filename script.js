let playerWins = 0;
let computerWins = 0;

let playerScore = document.getElementById("play");
let computerScore = document.getElementById("comp");

function playRound() {
    let playerSelection = playerChoicePicker();
    let computerSelection = computerChoicePicker();

  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    playerWins++;
    playerScore.textContent = playerWins;
    return "Player Wins!";
  }

  if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")
  ) {
    computerWins++;
    computerScore.textContent = computerWins;
    return "Computer Wins!";
  }

  return "It's a tie!";
}

function computerChoicePicker() {
  let choices = ["Rock", "Paper", "Scissors"];
  randomizer = choices[Math.floor(Math.random() * choices.length)];
  return randomizer;
}

function playerChoicePicker() {
  let choices = ["Rock", "Paper", "Scissors"];
  randomizer = choices[Math.floor(Math.random() * choices.length)];
  return randomizer;
}
