"use strict";

/* ASSIGNMENT
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array 
given as argument in order to reverse its elements. Neither may use the 
standard reverse method.
*/

let reverseArray = ( array ) => {
  let newArray = [];
  for(let x = array.length; x > 0; x--)
    newArray.push(array[x-1]);
  return newArray;
}

let reverseArrayInPlace = () => {
  for(let x = 0; x < arrayValue.length/2; x++){
    let rightside = arrayValue.length-1;

    // Swap the left side value for the right side value
    [arrayValue[x], arrayValue[rightside-x]] =
    [arrayValue[rightside-x], arrayValue[x]];
  }
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

var arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [4, 3, 2, 1]

var arrayValue = ["z","z,","u","B","z","z","i","F"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → ["F", "i", "z", "z", "B", "u", "z", "z"]