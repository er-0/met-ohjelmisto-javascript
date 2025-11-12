'use strict';

const strings = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

function concat(strings) {
  let result = '';
  for (let string of strings) {
    result += string;
  }
  return result;
}

document.querySelector('#target').innerHTML = concat(strings);