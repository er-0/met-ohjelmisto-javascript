function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  // The maximum is inclusive and the minimum is inclusive
}

const dice = +prompt('How many dice?');
const sum_wanted = +prompt('What sum do you want?');
let sum_hits = 0;

for (let i = 0; i < 10000; i++) {
  let sum = 0;
  for (let k = 0; k < dice; k++) {
    sum += getRandomIntInclusive(1, 6);
  }
  if (sum === sum_wanted) {
    sum_hits++;
  }
}

const probability = sum_hits / 10000 * 100;
const output = `Probability to get sum ${sum_wanted} with ${dice} dice is ${probability.toFixed(
    2)}%`;

document.querySelector('#target').innerHTML = output;