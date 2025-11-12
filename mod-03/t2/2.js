'use strict';

const target = document.querySelector('#target');

const ordinals = ['First', 'Second', 'Third'];
for (let i = 0; i < ordinals.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${ordinals[i]} item`;
  if (i === 1) {
    li.classList.add('my-item');
  }
  target.appendChild(li);
}