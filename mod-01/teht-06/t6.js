const confirmed = confirm('Should I calculate the square root?');
let output;

if (confirmed) {
  const number = +prompt('Give a number');

  if (number < 0) {
    output = `The square root of a negative number is not defined.`;
  } else {
    const sqrt = Math.sqrt(number);
    output = `The square root of ${number} is ${sqrt}.`;
  }
} else {
  output = `The square root is not calculated.`;
}

document.querySelector('#target').innerHTML = output;