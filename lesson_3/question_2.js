// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// SOLUTIONS:
function hasQuestionMark(str) {
  return str[str.length - 1] === "!";
}

console.log(hasQuestionMark(str2));

str1.endsWith("1");
