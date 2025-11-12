'use strict';

const numbers = [2, 7, 4];

function even(numbers) {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const evens = even(numbers);

console.log(numbers);
console.log(evens);