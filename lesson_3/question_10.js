// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// SOLUTIONS:
const modifiedAdvice = advice.slice(0, advice.indexOf("house")); // indexOf method returns the index position of the first letter from the given word in the argument. In this case, index position 39 of "house".
