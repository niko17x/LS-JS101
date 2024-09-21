// // Lesson 2: Small Programs > 28. Rock Paper Scissors

// const readline = require("readline-sync");

// let runGame = true;
// // const VALID_CHOICES = [
// //   "(r)ock",
// //   "(p)aper",
// //   "(s)cissors",
// //   "sp(o)ck",
// //   "(l)izard",
// // ];

// // const WIN_CONDITIONS = {
// //   r: ["s", "l"],
// //   p: ["r", "o"],
// //   s: ["p", "l"],
// //   l: ["o", "p"],
// //   o: ["s", "r"],
// // };

// // let score = {
// //   player: 0,
// //   computer: 0,
// //   tie: 0,
// // };

// // function resetScore() {
// //   score = {
// //     player: 0,
// //     computer: 0,
// //     tie: 0,
// //   };
// // }

// // function convertToWord(playerChoice) {
// //   switch (playerChoice) {
// //     case "s":
// //       word = "scissors";
// //       break;
// //     case "r":
// //       word = "rock";
// //       break;
// //     case "p":
// //       word = "paper";
// //       break;
// //     case "o":
// //       word = "spock";
// //       break;
// //     case "l":
// //       word = "lizard";
// //       break;
// //     default:
// //       null;
// //   }
// //   return word;
// // }

// // function displayRoundMessage(playerChoice, computerChoice) {
// //   let roundResult = getRoundResult(playerChoice, computerChoice);

// //   if (roundResult === "tie") {
// //     prompt("It's a tie!");
// //   } else if (roundResult === "player") {
// //     prompt("Player wins!");
// //   } else {
// //     prompt("Computer wins!");
// //   }
// // }

// const VALID_CHOICES = {
//   rock: {
//     validInput: ["rock", "r"],
//     winConditions: ["scissors", "lizard"],
//   },
//   paper: {
//     validInput: ["paper", "p"],
//     winConditions: ["rock", "spock"],
//   },
//   scissors: {
//     validInput: ["scissors", "sc"],
//     winConditions: ["paper", "lizard"],
//   },
//   lizard: {
//     validInput: ["lizard", "l"],
//     winConditions: ["spock", "paper"],
//   },
//   spock: {
//     validInput: ["spock", "sp"],
//     winConditions: ["scissors", "rock"],
//   },
// };

// const GAME_STATS = {
//   roundsPlayed: 0,
//   player: {
//     wins: 0,
//     losses: 0,
//   },
//   computer: {
//     wins: 0,
//     losses: 0,
//   },
// };

// const WINNING_SCORE = 3;

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function replayGame() {
//   let playerChoice = getPlayerReplayChoice();
//   updateGameState(playerChoice);
// }

// function getPlayerReplayChoice() {
//   prompt("Do you want to play again (y/n)?");
//   let answer = readline.question().trim().toLowerCase();

//   while (answer[0] !== "n" && answer[0] !== "y") {
//     prompt("Please enter 'y' or 'n'");
//     answer = readline.question().toLowerCase();
//   }

//   return answer[0];
// }

// function updateGameState(playerReplayChoice) {
//   if (playerReplayChoice === "n") {
//     prompt("Thanks for playing, goodbye!");
//     runGame = false;
//   } else {
//     runGame = true;
//   }
// }

// function isPlayerWinner(playerChoice, computerChoice) {
//   const playerChoiceInput = getPlayerChoiceInput(playerChoice);
//   const winCondition = playerChoiceInput.winConditions;

//   return winCondition.includes(computerChoice);
// }

// function getPlayerChoiceInput(playerChoice) {
//   return Object.values(VALID_CHOICES).find((choice) =>
//     choice.validInput.includes(playerChoice)
//   );
// }

// function getRoundResult(playerChoice, computerChoice) {
//   const FIRST_VALUE_IN_VALID_INPUT = 0;

//   const playerWins = isPlayerWinner(playerChoice, computerChoice);
//   const playerChoiceInput = getPlayerChoiceInput(playerChoice);
//   const playerInput = playerChoiceInput.validInput[FIRST_VALUE_IN_VALID_INPUT];

//   if (playerInput === computerChoice) return "tie";

//   return playerWins ? "player" : "computer";
// }

// function displayRoundWinner(playerChoice, computerChoice) {
//   prompt(`You chose: ${playerChoice}, computer chose: ${computerChoice}`);
//   const roundResult = getRoundResult(playerChoice, computerChoice);

//   if (roundResult === "tie") prompt("It's a tie!");
//   if (roundResult === "player") prompt("Player wins this round!");
//   if (roundResult === "computer") prompt("Computer wins this round!");
//   // displayRoundMessage(playerChoice, computerChoice);
// }

// function incrementScore(winner) {
//   GAME_STATS[winner].wins += 1;
//   GAME_STATS[roundsPlayed] += 1;
// }

// function displayGameWinner() {
//   let winnerResult = checkIfGameOver();
//   prompt(winnerResult);
// }

// function getPlayerChoice() {
//   let choices = Object.keys(VALID_CHOICES).join(", ");

//   prompt(`Choose one (ex: "rock" or "r"): ${choices}`);
//   let playerChoice = readline.question();

//   validatePlayerChoice(playerChoice);
// }

// function validatePlayerChoice(playerChoice) {
//   const normalizedChoice = playerChoice.toLowerCase();

//   return Object.values(VALID_CHOICES).some((choice) =>
//     choice.validInput.includes(normalizedChoice)
//   );
// }

// function checkIfGameOver() {
//   incrementScore(winner);

//   if (GAME_STATS.player.wins === WINNING_SCORE) {
//     return "Player wins!";
//   } else if (GAME_STATS.computer.wins === WINNING_SCORE) {
//     return "Computer wins!";
//   }
// }

// function generateComputerChoice() {
//   let validChoicesLength = Object.keys(VALID_CHOICES).length;
//   let randomIndex = Math.floor(Math.random() * validChoicesLength);
//   let validChoices = Object.keys(VALID_CHOICES);

//   return validChoices[randomIndex];
// }

// function playGame() {
//   prompt(
//     "Welcome to rock, paper, scissors, spock and lizard!\n First to 3 wins takes home the bacon!"
//   );

//   let playerChoice = getPlayerChoice();
//   let computerChoice = generateComputerChoice();
//   let winner = displayRoundWinner(playerChoice, computerChoice);

//   checkIfGameOver();
//   displayGameWinner(winner);
//   console.log(score);
// }

// while (runGame) {
//   playGame();
// }

// /*
// Keypoints:
// 1. Functions should only do ONE thing. This keeps them easy to debug and modular!

// */

// /*
// Edge cases:
// 1. Handling playerChoice if not in VALID_CHOICES.validInput.
// 2. Comparing playerChoice vs computerChoice when playerChoice is in abbreviated form.

// */

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

const WINNING_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice(isValidChoice) {
  let choices = Object.keys(VALID_CHOICES).join(", ");

  prompt(`Choose one (ex: "rock" or "r"): ${choices}`);
  let playerChoice = readline.question();

  return playerChoice;
}

// ! this function not being used:
function validatePlayerChoice(playerChoice) {
  const normalizedChoice = playerChoice.toLowerCase();

  return Object.values(VALID_CHOICES).some((choice) =>
    choice.validInput.includes(normalizedChoice)
  );
}

function generateComputerChoice() {
  let validChoicesLength = Object.keys(VALID_CHOICES).length;
  let randomIndex = Math.floor(Math.random() * validChoicesLength);
  let validChoices = Object.keys(VALID_CHOICES);

  return validChoices[randomIndex];
}

function getRoundResult(playerChoice, computerChoice) {
  const FIRST_VALUE_IN_VALID_INPUT = 0;

  const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const playerChoiceInput = getPlayerChoiceInput(playerChoice);
  const playerInput = playerChoiceInput.validInput[FIRST_VALUE_IN_VALID_INPUT];

  if (playerInput === computerChoice) return "tie";

  return playerWins ? "player" : "computer";
}

function isPlayerWinner(playerChoice, computerChoice) {
  const playerChoiceInput = getPlayerChoiceInput(playerChoice);
  const winCondition = playerChoiceInput.winConditions;

  return winCondition.includes(computerChoice);
}

function getPlayerChoiceInput(playerChoice) {
  return Object.values(VALID_CHOICES).find((choice) =>
    choice.validInput.includes(playerChoice)
  );
}

function displayRoundWinner(playerChoice, computerChoice, roundResult) {
  prompt(`You chose: ${playerChoice}, computer chose: ${computerChoice}`);

  if (roundResult === "tie") prompt("It's a tie!");
  if (roundResult === "player") prompt("Player wins this round!");
  if (roundResult === "computer") prompt("Computer wins this round!");
}

function incrementScore(winner) {
  if (winner === "tie") {
    return;
  } else {
    GAME_STATS[winner].wins += 1;
  }

  GAME_STATS.roundsPlayed += 1;
}

function isGameOver() {
  if (GAME_STATS.player.wins === WINNING_SCORE) {
    return "Player wins the game!";
  } else if (GAME_STATS.computer.wins === WINNING_SCORE) {
    return "Computer wins the game!";
  }
}

function displayGameWinner(gameWinner) {
  prompt(`${gameWinner}`);
}

function displayGameScore() {
  console.table(GAME_STATS);
}

function askForGameReplay() {
  prompt("Do you want to play again?");
  let answer = readline.question().trim().toLowerCase();

  if (answer[0] !== "y") {
    runGame = false;
  }
  console.clear();
  prompt("Thanks for playing, goodbye!");
}

function resetGameStats() {
  GAME_STATS.roundsPlayed = 0;
  GAME_STATS.player.wins = 0;
  GAME_STATS.computer.wins = 0;
}

function playGame() {
  prompt(
    "Welcome to rock, paper, scissors, spock and lizard!\n First to 3 wins takes home the bacon!"
  );

  const playerChoice = getPlayerChoice();
  const isPlayerChoiceValid = validatePlayerChoice(playerChoice);

  const computerChoice = generateComputerChoice();

  const roundResult = getRoundResult(playerChoice, computerChoice);
  displayRoundWinner(playerChoice, computerChoice, roundResult);
  incrementScore(winner);
  displayGameScore();

  const gameWinner = isGameOver();
  if (gameWinner) {
    displayGameWinner(gameWinner);
    askForGameReplay();
    resetGameStats();
  }
}

while (runGame) {
  playGame();
}
