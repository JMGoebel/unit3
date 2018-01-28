"use strict";

/* ASSIGNMENT
Write a function arrayToList that builds up a data structure like the previous 
one when given [1, 2, 3] as argument, and write a listToArray function that 
produces an array from a list. Also write the helper functions prepend, which 
takes an element and a list and creates a new list that adds the element to 
the front of the input list, and nth, which takes a list and a number and 
returns the element at the given position in the list, or undefined when 
there is no such element.
*/
let arrayToList = ( array ) => {
  
}

let listToArray = ( list ) => {
  return 0;
}

let prepend = ( elm, list ) => {
  return 0;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20