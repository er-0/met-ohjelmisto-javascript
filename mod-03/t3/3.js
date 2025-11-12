'use strict';

const target = document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];

for (name of names) {
  target.innerHTML += `<li>${name}</li>`;
}