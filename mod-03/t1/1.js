'use strict';

const list = `<li>First item</li><li>Second item</li><li>Third item</li>`;
const t = document.querySelector('#target');

t.innerHTML = list;
t.classList.add('my-list');