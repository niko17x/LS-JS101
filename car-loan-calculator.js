/*
print welcome message
get input for title of loan
get input for loan amount
  input: non-negative Number, max 2 decimal places, account for commas.
get input for monthly interest rate
  input: non-negative integer, max 2 decimal places, Number between 1 - 100.
  ex input: 5 => 0.05
get input for loan duration in months
  input: non-negative integer.
calculate inputs
save result in object
display result
get input for another calculation

dealing with edge cases:
bad loan amount input
  message: "Input must be a postive number. ex: 19,999.99"
bad monthly interest rate input:
  message: "Please enter a number between 1 and 100. ex: 8"
bad loan duration in months input:
  message: "Please enter a positive number for the total loan duration of months"

functions:
  While loop that takes (error) message and loop the question until correctly answered.
  function to run loan calculation.
  function to save loan to object.
  function to display loan history (focus on readability).
    tesla loan
    monthly rate = $380/mo.
    -------------
    mazda loan
    monthly rate = $491/mo.
    -------------


*/
const readlineSync = require("readline-sync");

function loanCalculator() {
  let loanAmount;
  let monthlyIntRate;
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
    console.log(`Monthly interest rate: ${monthlyIntRate}%`);
    console.log(`Loan duration in months: ${loanDurationMonths} months`);
    console.log(`Monthly payments: $${monthlyPmnts}`);
  }

  function calculateLoan() {
    const convertIntRate = monthlyIntRate / 100;

    monthlyPmnts =
      loanAmount *
      (convertIntRate /
        (1 - Math.pow(1 + convertIntRate, -loanDurationMonths)));

    return (monthlyPmnts = convertToFloat(monthlyPmnts));
  }

  loanAmount = readlineSync.question("What is the loan amount? Ex: 4999.99\n:");
  while (isNaN(loanAmount) || loanAmount < 1) {
    loanAmount = displayErrorMsg("Input must be a number greater than 1\n");
  }

  loanAmount = convertToFloat(loanAmount);

  monthlyIntRate = readlineSync.question(
    "What is the monthly interest rate? Ex: 8.38\n"
  );

  while (isNaN(monthlyIntRate) || monthlyIntRate < 0 || monthlyIntRate > 100) {
    monthlyIntRate = displayErrorMsg("Input must be between 1 and 100.\n:");
  }

  monthlyIntRate = convertToFloat(monthlyIntRate);

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
