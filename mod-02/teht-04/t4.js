'use strict';

let number = 1;
const numbers = [];
while (number !== 0) {
  number = +prompt('Give a number. Zero quits.');
  numbers.push(number);
}

numbers.sort((a, b) => b - a);
for (number of numbers) {
  console.log(number);
}