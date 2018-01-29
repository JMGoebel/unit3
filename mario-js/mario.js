"use strict";

printPyramid(5);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  // print that pyramid!
  for(let x = height; x > 0; x--){
    let layer = "";
    for (let y = 0; y <= height+1; y++)
      y < x ? layer += " " : layer += "#";
    
    console.log(layer);
  }
}