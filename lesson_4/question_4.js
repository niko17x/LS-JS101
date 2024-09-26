// Starting with the string... show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

// SOLUTIONS:

const result1 = "Four score and " + famousWords;

const result2 = "Four score and ".concat(famousWords);

const result3 = (famousWords.split(" ")[0] = "Four score and " + famousWords);
