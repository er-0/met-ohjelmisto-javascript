function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const throws = +prompt('How many rolls of the dice?');
let results = 0;

for (let i = 0; i < throws; i++) {
  results += getRandomIntInclusive(1, 6);
}

document.querySelector(
    '#target').innerHTML = `The sum of the rolls is ${results}.`;