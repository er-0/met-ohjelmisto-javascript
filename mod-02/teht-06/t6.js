/*Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p) */
'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;

while (result !== 6) {
  result = rollDice();
  document.querySelector('#target').innerHTML += `<li>${result}</li>`;
}
