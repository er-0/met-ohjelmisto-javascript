'use strict';

const candidateList = [];
const candidates = +prompt('How many candidates?');
for (let i = 1; i <= candidates; i++) {
  const name = prompt(`Name for candidate ${i}`);
  let candidateObject = {name: name, votes: 0};
  candidateList.push(candidateObject);
}
const voters = +prompt('How many voters?');

for (let i = 1; i <= voters; i++) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    let voteFor = prompt(
        `Voter ${i}, who do you vote for? Empty vote possible.`);
    if (voteFor === null || voteFor === '') {
      alert(`Voter ${i} skipped.`);
      break;
    }
    let match = candidateList.find(e => e.name === voteFor);
    if (match) {
      match.votes += 1;
      break;
    } else {
      alert('Candidate not found');
    }
    if (attempt === 5) {
      alert(`Voter ${i} skipped for 5 incorrect attempts.`);
    }
  }
}

candidateList.sort((a, b) => b.votes - a.votes);

const winner = candidateList[0];
console.log(
    `The winner is ${winner.name} with ${winner.votes} votes. \nresults:`);
for (let c of candidateList) {
  console.log(`${c.name}: ${c.votes} votes`);
}