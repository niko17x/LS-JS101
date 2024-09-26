// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// SOLUTIONS:

advice.replace("important", "urgent"); // Using replace() method.

advice.replaceAll("important", "urgent"); // Using replaceAll() string method to replace all instances of "important" with "urgent".
