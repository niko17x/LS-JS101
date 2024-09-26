// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // Mutates original array.
// => [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1); // Mutates original array.
// => [ 5, 4, 3, 2, 1 ]

// SOLUTIONS:
let arr = [];
for (let i = 4; i >= 0; i--) {
  arr.push(numbers[i]);
}

let reversedArray = numbers.slice().reverse(); // Doesn't mutate original array.

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1); // Doesn't mutate original array.

// BONUS SOLUTIONS:
const bar = numbers.map((_, index) => numbers[numbers.length - (index + 1)]);

let revArray = [];
numbers.forEach((number) => {
  revArray.unshift(number);
});
