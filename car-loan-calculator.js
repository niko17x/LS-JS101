const readlineSync = require("readline-sync");

function loanCalculator() {
  let loanAmount;
  let interestRate;
  let loanDurationMonths;
  let monthlyPmnts;

  console.log(" ############ Welcome to the loan calculator! ############ ");

  let title = readlineSync.question(
    "Let's title this calculation! (ex: 2023 lexus loan):\nTitle: "
  );

  // if title is an empty string, provide current date instead
  if (!title) {
    title = new Date().toLocaleDateString();
  }

  function displayErrorMsg(errorMsg, question) {
    console.log(errorMsg);
    return readlineSync.question(question);
  }

  function convertToFloat(value) {
    return Number.parseFloat(value).toFixed(2);
  }

  function displayResults() {
    console.log(`Title: ${title}`);
    console.log(`Loan amount: $${loanAmount}`);
    console.log(`Monthly interest rate: ${interestRate}%`);
    console.log(`Loan duration in months: ${loanDurationMonths} months`);
    console.log(`Monthly payments: $${monthlyPmnts}`);
  }

  function calculateLoan() {
    const annualIntRate = interestRate / 100;
    const moIntRate = annualIntRate / 12;

    monthlyPmnts =
      loanAmount *
      (moIntRate / (1 - Math.pow(1 + moIntRate, -loanDurationMonths)));

    return (monthlyPmnts = convertToFloat(monthlyPmnts));
  }

  loanAmount = readlineSync.question("What is the loan amount? Ex: 4999.99\n:");
  while (isNaN(loanAmount) || loanAmount < 1) {
    loanAmount = displayErrorMsg("Input must be a number greater than 1\n");
  }

  loanAmount = convertToFloat(loanAmount);

  interestRate = readlineSync.question(
    "What is the monthly interest rate? Ex: 8.38\n"
  );

  while (isNaN(interestRate) || interestRate < 0 || interestRate > 100) {
    interestRate = displayErrorMsg("Input must be between 1 and 100.\n:");
  }

  interestRate = convertToFloat(interestRate);

  loanDurationMonths = readlineSync.question(
    "How many months is the loan duration? Ex: 60 months\n"
  );

  while (isNaN(loanDurationMonths) || loanDurationMonths < 1) {
    loanDurationMonths = displayErrorMsg("Input must be greater than 1.\n");
  }

  calculateLoan();
  displayResults();
}

while (true) {
  loanCalculator();

  const answer = readlineSync.question(
    "Would you like to go again? (yes/no)\n"
  );
  if (answer.trimStart()[0].toLowerCase() !== "y") break;
}
