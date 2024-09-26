// In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

// SOLUTIONS:
const dinoHoppy = ["Dino", "Hoppy"];

for (const item of dinoHoppy) {
  // Iterate and add new items to original array.
  flintstones.push(item);
}

flintstones = [...flintstones, "Dino", "Hoppy"]; // Spread operator to copy orignal data.

flintstones.push("Dino", "Hoppy"); // Push multiple new items to original array.
