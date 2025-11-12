'use strict';

const dogs = [];
for (let i = 0; i < 6; i++) {
  let dog = prompt('Add a dog');
  dogs.push(dog);
}

dogs.sort().reverse();

for (let i = 0; i < 6; i++) {
  document.querySelector('#target').innerHTML += `<li>${dogs[i]}</li>`;
}