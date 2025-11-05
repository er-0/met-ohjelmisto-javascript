const number = +prompt('Write a number');
let is_prime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    is_prime = false;
    break;
  }
}

//prints the word 'not' if is_prime is false
document.querySelector(
    '#target').innerHTML = `The number ${number} is ${is_prime ? '' : 'not'} a prime.`;