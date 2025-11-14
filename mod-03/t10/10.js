const p = document.querySelector('#target');
const source = document.querySelector('#source');

source.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const fName = source.querySelector('input[name=firstname]');
  const lName = source.querySelector('input[name=lastname]');
  p.innerText = `Your name is ${fName.value} ${lName.value}.`;
});