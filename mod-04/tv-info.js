'use strict';

const tvFormElem = document.querySelector('#tvForm');

tvFormElem.addEventListener('submit', async function(evt) {
  evt.preventDefault()
  const input = tvFormElem.querySelector('input[name=q]').value;
  const url = `https://api.tvmaze.com/search/shows?q=${input}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})