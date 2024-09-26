// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

// SOLUTIONS:

numbers.includes(number1); // => false;
numbers.includes(number2); // => true;

/* NOTES:

Difference between the array methods .some() and .includes() is that the latter is best used to simply just check if a specific value is in the array while .some() can be used with a callback function for testing logic.

*/
