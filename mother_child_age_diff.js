"use strict";

const ANCESTRY = JSON.parse(require("./ancestry.js"));

let avg_ages = [];

// filter out famales
let females = ANCESTRY.filter( person => { return person.sex = "f"; });

// Allow access to mothers by name
let byName = {};
females.forEach( (person) => { byName[person.name] = person; } );

// find the avg age diff of listed mothers and children
let avg_age = (ANCESTRY.reduce( (total, person) => {
  if (byName[person.mother] !== undefined){
    return [ total[0] + (person.born - byName[person.mother].born) , total[1] + 1];
  }
  return [ total[0], total[1] ];
}, [0,0])); 
// The first number in the array sums the array
// The second number in the array adds devisor
console.log(avg_age[0] / avg_age[1]);