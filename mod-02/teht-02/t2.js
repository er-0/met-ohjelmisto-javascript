'use strict';

const amount = +prompt('How many participants?');
const participants = [];

for (let i = 0; i < amount; i++) {
  let name = prompt('Add a participant');
  participants.push(name);
}

participants.sort();

for (let i = 0; i < participants.length; i++) {
  document.querySelector('#target').innerHTML += `<li>${participants[i]}</li>`;
}