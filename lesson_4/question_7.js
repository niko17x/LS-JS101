// Consider the following object:

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

["Barney", 2];

// SOLUTIONS:

// 1. Iterating over an object converted to an array using Object.entries():
let result = [];

for (const [char, value] of Object.entries(flintstones)) {
  if (char === "Barney") {
    result.push(char, value);
  }
}

// 2. Iterating over the object keys to find matching element:
for (const char in flintstones) {
  if (char === "Barney") {
    result.push(char, flintstones[char]);
  }
}

// 3. Using .filter() method on a converted array:
Object.entries(flintstones).filter((char) => char[0] === "Barney")[0];
