// Lesson 2: Small Programs > 28. Rock Paper Scissors

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function playGame() {
  const VALID_CHOICES = ["rock", "paper", "scissors"];

  function displayWinner(choice, computerChoice) {
    prompt(`You chose: ${choice}, computer chose: ${computerChoice}`);

    if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      prompt("You win!");
    } else if (
      (choice === "rock" && computerChoice === "paper") ||
      (choice === "paper" && computerChoice === "scissors") ||
      (choice === "scissors" && computerChoice === "rock")
    ) {
      prompt("Computer wins!");
    } else {
      prompt("It's a tie");
    }
  }

  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
}

while (true) {
  playGame();

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer === "n") break;
}
