"use strict";

for(let x = 1; x <= 100; x++){
  let output = "";
  if( x % 3 === 0 )
    output += "Fizz";
  if( x % 5 === 0 )
    output += "Buzz";
  if( output === "" )
    output = x;
  console.log(output);
}