// Lesson 2: Small Programs > 28. Rock Paper Scissors

const readline = require("readline-sync");

let runGame = true;
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const WIN_CONDITIONS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};
let score = {
  player: 0,
  computer: 0,
  tie: 0,
};

function checkWinner() {
  for (let elem in score) {
    if (score[elem] === 3) {
      prompt(
        `${elem} wins the game!\n#############################################`
      );
      score = {
        player: 0,
        computer: 0,
        tie: 0,
      };
      replay();
    }
  }
}

function replay() {
  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  answer === "n" ? (runGame = false) : (runGame = true);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function playGame() {
  let foo = 0;

  function displayWinner(playerChoice, computerChoice) {
    prompt(`You chose: ${playerChoice}, computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
      prompt("It's a tie!");
      return "tie";
    } else if (WIN_CONDITIONS[playerChoice].includes(computerChoice)) {
      prompt("You WIN!");
      return "player";
    } else {
      prompt("You lose!");
      return "computer";
    }
  }

  function incrementScore(winner) {
    score[winner] += 1;

    if (score[winner] >= 3) {
      prompt(`${winner} wins the game!`);
    }
  }

  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = VALID_CHOICES[randomIndex];

  let winner = displayWinner(playerChoice, computerChoice);
  incrementScore(winner);
  console.log(score);
}

while (runGame) {
  playGame();
  checkWinner();
}
