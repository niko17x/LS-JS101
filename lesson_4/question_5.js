// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

const arr = [1, 2, 3, 4, 5];

arr.splice(2, 1); // Remove one elements starting and including index 2 => [1, 2, 4, 5]
arr.splice(2, 2); // Remove two elements starting and including index 2 => [1, 2, 5]

/*
NOTES:

.splice(start, deleteCount, itemN) is a destructive array method that removes or replaces existing elements and/or adding new elements in place (itemN). 'start' in the given index position of the array. 'deleteCount' is the given number to delete the length of elements in the array.

*/
