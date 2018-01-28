"use strict";

/* ASSIGNMENT
Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to 
make use of this new function.
*/

let countBs = str => {
  let count = 0;
  for(let x in str)
    str[x] === "B" ? count++ : null;
  return count;
};

let countChar = ( str, char ) => {
  let count = 0;
  for(let x in str)
    str[x] === char ? count++ : null;
  return count;
};

console.log( countBs("BBC") ); // 2
console.log( countChar("kakkerlak", "k") ); // 4
