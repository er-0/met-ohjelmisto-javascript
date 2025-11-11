'use strict';

const numbers = [];
for (let i = 0; i < 5; i++) {
  let number = +prompt('Enter a number:');
  numbers.push(number);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  document.querySelector('#target').innerHTML += `<li>${numbers[i]}</li>`;
}