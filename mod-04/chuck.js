'use strict';

const url = `https://api.chucknorris.io/jokes/random`;

async function loadJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
    /*const res = document.querySelector('#results');
    res.innerHTML = data.value;*/
  } catch (error) {
    console.log(error);
  }
}

void loadJoke();
