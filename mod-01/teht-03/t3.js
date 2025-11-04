'use strict';

const no1 = +prompt('First number');
const no2 = +prompt('Second number');
const no3 = +prompt('Third number');

const sum = no1 + no2 + no3
const avg = sum / 3
const product = no1 * no2 * no3

document.querySelector('#target').innerHTML = `The numbers are ${no1}, ${no2} and ${no3}. 
<br>The sum is ${sum}, the product is ${product} and the average is ${avg}.`