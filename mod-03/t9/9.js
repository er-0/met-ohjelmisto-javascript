'use strict';

function calculate(equation) {
  if (equation.includes('+')) {
    const [num1, num2] = equation.split('+');
    return num1 + num2;
  } else if (equation.includes('-')) {
    const [num1, num2] = equation.split('-');
    return num1 - num2;
  } else if (equation.includes('*')) {
    const [num1, num2] = equation.split('*');
    return num1 * num2;
  } else if (equation.includes('/')) {
    const [num1, num2] = equation.split('/');
    return num1 / num2;
  }
}

const result = document.querySelector('#result');
const button = document.querySelector('#start');

function doCalculation() {
  const equation = document.querySelector('#calculation').value;

  result.textContent = calculate(equation);
}

button.addEventListener('click', doCalculation);