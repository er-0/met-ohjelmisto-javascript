'use strict';

const target = document.querySelector('#target');
const trigger = document.querySelector('#trigger');

trigger.addEventListener('mouseover', (event) => {target.src = 'img/picB.jpg';});
trigger.addEventListener('mouseout', (event) => {target.src = 'img/picA.jpg';});