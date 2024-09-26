// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

for (let num of numbers) {
  console.log(num);
}

// => It doesn't raise an error as JS will "fill" the empty values with 'undefined' as placeholders.

// Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // What will this line return?

// => numbers[4] will return 'undefined' since undefined is located in numbers index pos. 4.
