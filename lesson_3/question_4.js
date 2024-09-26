// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// SOLUTIONS:

const modifiedStr = munstersDescription
  .split(", ")
  .map((word) => word.toLowerCase())[0]
  .split(", ")
  .map((str) => str[0].toUpperCase() + str.slice(1));

// console.log(modifiedStr);

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLocaleLowerCase();

const str = "this ia string";

const newStr = str.charAt(3);
console.log(newStr);
