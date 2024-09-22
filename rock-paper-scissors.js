const readline = require("readline-sync");

let runGame = true;

const VALID_CHOICES = {
  rock: {
    validInput: ["rock", "r"],
    winConditions: ["scissors", "lizard"],
  },
  paper: {
    validInput: ["paper", "p"],
    winConditions: ["rock", "spock"],
  },
  scissors: {
    validInput: ["scissors", "sc"],
    winConditions: ["paper", "lizard"],
  },
  lizard: {
    validInput: ["lizard", "l"],
    winConditions: ["spock", "paper"],
  },
  spock: {
    validInput: ["spock", "sp"],
    winConditions: ["scissors", "rock"],
  },
};

const GAME_STATS = {
  roundsPlayed: 0,
  player: {
    wins: 0,
  },
  computer: {
    wins: 0,
  },
};

const MESSAGES = {
  WELCOME:
    "Welcome to rock, paper, scissors, spock and lizard!\n First to 3 wins takes home the bacon!\n",
  INVALID_CHOICE: "That is an invalid choice, try again.",
  PLAY_AGAIN:
    "Do you want to play again? Type 'y' to continue or anything else to end the game.",
  GOODBYE: "Thanks for playing, goodbye!",
  TIE: "It's a tie!",
  PLAYER_WINS: "Player wins this round!",
  COMPUTER_WINS: "Computer wins this round!",
  GAME_RULES:
    "GAME RULES:\n Rock: Beats Scissors and Lizard, but loses to Paper and Spock\n Paper: Beats Rock and Spock, but loses to Scissors and Lizard.\n Scissors: Beats Paper and Lizard, but loses to Rock and Spock.\n Lizard: Beats Spock and Paper, but loses to Rock and Scissors.\n Spock: Beats Scissors and Rock, but loses to Paper and Lizard.\n",
};

const WINNING_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getInput(message) {
  prompt(message);

  return readline.question().trim().toLowerCase();
}

function getPlayerChoice() {
  const choices = Object.keys(VALID_CHOICES).join(", ");

  prompt(`Choose one (ex: "rock" or "r"): ${choices}`);
  let playerChoice = readline.question().trim();

  while (!isPlayerChoiceValid(playerChoice)) {
    playerChoice = getInput(MESSAGES.INVALID_CHOICE);
  }

  return playerChoice;
}

function isPlayerChoiceValid(playerChoice) {
  const normalizedChoice = playerChoice.toLowerCase();

  // Returns true/false:
  return Object.values(VALID_CHOICES).some((choice) =>
    choice.validInput.includes(normalizedChoice)
  );
}

function generateComputerChoice() {
  const validChoicesLength = Object.keys(VALID_CHOICES).length;
  const randomIndex = Math.floor(Math.random() * validChoicesLength);
  const validChoices = Object.keys(VALID_CHOICES);

  return validChoices[randomIndex];
}

function getRoundResult(playerChoice, computerChoice) {
  const playerInput = getPlayerChoiceInput(playerChoice);
  const playerChoiceName = playerInput.validInput[0];

  if (playerChoiceName === computerChoice) return "tie";

  return isPlayerWinner(playerInput, computerChoice) ? "player" : "computer";
}

function isPlayerWinner(playerInput, computerChoice) {
  const winConditions = playerInput.winConditions;
  return winConditions.includes(computerChoice);
}

function getPlayerChoiceInput(playerChoice) {
  return Object.values(VALID_CHOICES).find((choice) =>
    choice.validInput.includes(playerChoice)
  );
}

function displayRoundWinner(playerChoice, computerChoice, roundResult) {
  const fullPlayerChoice = getPlayerChoiceInput(playerChoice).validInput[0];
  prompt(`You chose: ${fullPlayerChoice}, computer chose: ${computerChoice}`);

  if (roundResult === "tie") prompt(MESSAGES.TIE);
  if (roundResult === "player") prompt(MESSAGES.PLAYER_WINS);
  if (roundResult === "computer") prompt(MESSAGES.COMPUTER_WINS);
}

function incrementScore(winner) {
  if (winner === "tie") {
    return;
  } else {
    GAME_STATS[winner].wins += 1;
  }
}

function isGameOver() {
  if (GAME_STATS.player.wins === WINNING_SCORE) {
    return `*********** ${MESSAGES.PLAYER_WINS} ***********`;
  } else if (GAME_STATS.computer.wins === WINNING_SCORE) {
    return `*********** ${MESSAGES.COMPUTER_WINS} ***********`;
  }
}

function displayGameWinner(gameWinner) {
  prompt(`${gameWinner}`);
}

function displayGameScore() {
  console.table(GAME_STATS);
}

function askForGameReplay() {
  const answer = getInput(MESSAGES.PLAY_AGAIN);

  if (answer[0] !== "y") {
    runGame = false;
    prompt(MESSAGES.GOODBYE);
  }
}

function resetGameStats() {
  GAME_STATS.roundsPlayed = 0;
  GAME_STATS.player.wins = 0;
  GAME_STATS.computer.wins = 0;
}

function incrementRound() {
  GAME_STATS.roundsPlayed += 1;

  console.log(
    `################ ROUND #${GAME_STATS.roundsPlayed} ################`
  );
}

function playGame() {
  if (GAME_STATS.roundsPlayed === 0) {
    prompt(MESSAGES.WELCOME);
    prompt(MESSAGES.GAME_RULES);
  }

  incrementRound();
  const playerChoice = getPlayerChoice();
  const computerChoice = generateComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);
  displayRoundWinner(playerChoice, computerChoice, roundResult);
  incrementScore(roundResult);
  displayGameScore();

  const gameWinner = isGameOver();
  if (gameWinner) {
    displayGameWinner(gameWinner);
    askForGameReplay();
    resetGameStats();
    console.clear();
  }
}

while (runGame) {
  playGame();
}
