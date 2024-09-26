// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// SOLUTIONS:

const hasSpot = Object.keys(ages).includes("Spot");

console.log(hasSpot);

ages.hasOwnProperty("Spot");

/*
The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
*/
