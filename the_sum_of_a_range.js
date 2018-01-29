"use strict";

/* ASSIGNMENT
Write a range function that takes two arguments, start and end, and returns an
array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum 
of these numbers. Run the previous program and see whether it does indeed 
return 55.
*/

// Sum and array of numbers
let sum = ( array ) => { 
  let total = array.reduce( (total, current) => { return total + current }, 0);
  return total;
}
// Build an array of number from the given range
let range = ( start, stop, step ) => {
  let array = []

  step = step || 1; // no step then 1

  // alway have largest number on right 
  start > stop ? [start, stop] = [stop, start] : null;

  for(let x = start; x <= stop; x += Math.abs(step))
    step < 0 ? array.push(stop+start - x) : array.push(x);
  
  return array;
}

console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
console.log(sum(range(1, 10))); // → 55