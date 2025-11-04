function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  // The maximum is inclusive and the minimum is inclusive
}

const name = prompt('Give your name');
const house_num = getRandomIntInclusive(1, 4)
let house

switch (house_num) {
    case 1:
        house = 'Gryffindor';
        break;
    case 2:
        house = 'Hufflepuff';
        break;
    case 3:
        house = 'Slytherin';
        break;
    case 4:
        house = 'Ravenclaw';
        break;
    default:
        console.log("Random number error.");
}

document.querySelector('#target').innerHTML = `${name}, you are a ${house}`