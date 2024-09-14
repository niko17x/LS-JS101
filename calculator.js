const readlineSync = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
let selectedLanguage;

function messages(message) {
  return MESSAGES[selectedLanguage][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trim() === "" || Number.isNaN(Number(num));
}

function availLanguages() {
  return Object.keys(MESSAGES)
    .map((item, index) => `${index + 1}: ${item}`)
    .join("\n");
}

function selectLanguage() {
  selectedLanguage = readlineSync.question(
    `Please select a language:\n${availLanguages()}\n=>`
  );
  return selectedLanguage;
}

availLanguages();
selectLanguage();

console.log(selectedLanguage);
while (
  selectedLanguage > Object.keys(MESSAGES).length ||
  selectedLanguage <= 0 ||
  !Number(selectedLanguage)
) {
  prompt(
    `You must choose a number between 1 and ${Object.keys(MESSAGES).length}.`
  );
  selectLanguage();
}

const messageKeys = Object.keys(MESSAGES);
selectedLanguage = messageKeys[selectedLanguage - 1];

prompt(messages("welcome"));

while (true) {
  let firstNum = readlineSync.question(prompt(messages("firstNumber")));

  while (invalidNumber(firstNum)) {
    prompt(messages("invalidNumber"));
    firstNum = readlineSync.question(prompt(messages("firstNumber")));
  }

  let secondNum = readlineSync.question(prompt(messages("secondNumber")));

  while (invalidNumber(secondNum)) {
    prompt(messages("invalidNumber"));
    secondNum = readlineSync.question(prompt(messages("secondNumber")));
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
