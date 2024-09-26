// Determine whether the name Dino appears in the strings below -- check each string separately:

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// SOLUTIONS:
function hasWordDino(str) {
  return str.includes("Dino");
}

str2.match("Dino") !== null; // true

str2.indexOf("Dino") !== -1; // true
