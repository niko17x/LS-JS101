// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson. Create a new array that contains all of the above values, but in an un-nested format:

["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];

// SOLUTIONS:

let characters = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// 1. Using .concat() method:
characters = [].concat(...characters);

// forEach() method:
const modifiedCharacters = [];
const bar = characters.forEach((character) => {
  if (Array.isArray(character)) {
    modifiedCharacters.push(...character);
  } else {
    modifiedCharacters.push(character);
  }
});

// 2. Using .flat() method:
let newFlinstones = flintstones.flat(); // Flattens only one level deep.

/*
NOTES:

The spread syntax (...) on an array removes the outer most brackets of 'characters'. Logging this results in 'Fred' and 'Wilma' as strings (not a part of the array) while 'Barney', 'Betty', 'Bambam', 'Pebbles' are still in an array but now in the top level (previously second level).

Using the spread syntax (...characters) as an argument to the .concat() method (ie: [].concat(...characters)) effectively removes the top level array to "flatten" the data. Hence, the result is a single array w/o any nested arrays. This method can only work with top level arrays. Another nested array would still hold.

*/
