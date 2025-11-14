'use strict';

function calculate(num1, num2, oper) {
  switch (oper) {
    case 'add':
      return num1 + num2;
    case 'sub':
      return num1 - num2;
    case 'multi':
      return num1 * num2;
    case 'div':
      return num1 / num2;
  }
}

const result = document.querySelector('#result');
const button = document.querySelector('#start');

function doCalculation() {
  const num1 = parseInt(document.querySelector('#num1').value);
  const num2 = parseInt(document.querySelector('#num2').value);
  const oper = document.querySelector('#operation').value;

  result.textContent = calculate(num1, num2, oper);
}

button.addEventListener('click', doCalculation);