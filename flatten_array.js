"use strict";

let arrays = [ [1,2,3], [4,5], [6] ];

let flatArray = arrays.reduce( (val, array) => { return val.concat(array); });

console.log(flatArray);