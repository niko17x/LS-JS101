// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// SOLUTIONS:

function getCountOfT(str) {
  return str.split("").reduce((acc, current) => {
    if (current === "t") {
      acc += 1;
    }
  }, 0);
}

console.log(getCountOfT(statement1));
console.log(statement1.split(""));
