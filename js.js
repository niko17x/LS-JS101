const readlineSync = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
// const LANGUAGE = "en";

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trim() === "" || Number.isNaN(Number(num));
}

prompt(messages("welcome"));

while (true) {
  let firstNum = readlineSync.question("What is your first number? ");

  while (invalidNumber(firstNum)) {
    prompt(messages("invalidNumber"));
    firstNum = readlineSync.question("What is your first number? ");
  }

  let secondNum = readlineSync.question("What is your second number? ");

  while (invalidNumber(secondNum)) {
    prompt(messages("invalidNumber"));
    secondNum = readlineSync.question("What is your second number? ");
  }

  let operation = readlineSync.question(
    "Please type 1, 2, 3 or 4: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide\n"
  );

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages(invalidOperation));
    operation = readlineSync.question(
      "Please type 1, 2, 3 or 4: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide\n"
    );
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(firstNum) + Number(secondNum);
      break;
    case "2":
      output = Number(firstNum) - Number(secondNum);
      break;
    case "3":
      output = Number(firstNum) * Number(secondNum);
      break;
    case "4":
      output = Number(firstNum) / Number(secondNum);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt("Would you like to perform another operation? y/n");
  const answer = readlineSync.question();

  if (answer.trimStart()[0].toLowerCase() !== "y") break;
}
