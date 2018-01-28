"use strict";

let board_size = 8;

let board = "";
for(let x = 0; x < board_size; x++){
  for(let y = 0; y < board_size; y++){
    (y + x) % 2 === 0 ? board += " " : board += "#";
  }
  board += "\n";
}

console.log(board);