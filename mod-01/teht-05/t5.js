const year = +prompt('Write a year');
let is_leap

if (year % 400 === 0) {
  is_leap = true
}
else if (year % 100 === 0) {
  is_leap = false
}
else is_leap = year % 4 === 0;

//prints the word 'not' if is_leap is false
document.querySelector('#target').innerHTML = `The year ${year} is ${is_leap ? '' : 'not'} a leap year`