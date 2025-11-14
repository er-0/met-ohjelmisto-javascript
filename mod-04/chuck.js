'use strict';

const formElem = document.querySelector('#chuckForm');

formElem.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const input = formElem.querySelector('input[name=q]').value;
  const url = `https://api.chucknorris.io/jokes/search?query=${input}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const jokeArray = data.result;
    const res = document.querySelector('#results');
    res.innerHTML = ``

    for (let jokeElem of jokeArray) {
      const p = document.createElement('p');
      p.innerText = jokeElem.value;

      const a = document.createElement('article');
      a.append(p);

      res.append(a);
    }
  } catch (error) {
    console.log(error);
  }
});
