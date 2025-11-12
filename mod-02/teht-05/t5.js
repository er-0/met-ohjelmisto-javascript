'use strict';

const numbers = [];
let newNumber = +prompt('Give a number');

while (!numbers.includes(newNumber)) {
  numbers.push(newNumber);
  newNumber = +prompt('Give a different number');
}
alert("Number has been given already")

numbers.sort((a, b) => a - b);

for (let number of numbers) {
  console.log(number);
}