const start_year = +prompt('Write a start year');
const end_year = +prompt('Write a end year');
let is_leap;

for (let i = start_year; i <= end_year; i++) {
  if (i % 400 === 0) {
    is_leap = true;
  } else if (i % 100 === 0) {
    is_leap = false;
  } else is_leap = i % 4 === 0;

  if (is_leap) {
    document.querySelector('#target').innerHTML += `<li>${i}</li>`;
  }
}