'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = +prompt('How many sides does your die have?');
let result = 0;

while (result !== sides) {
  result = rollDice(sides);
  document.querySelector('#target').innerHTML += `<li>${result}</li>`;
}
