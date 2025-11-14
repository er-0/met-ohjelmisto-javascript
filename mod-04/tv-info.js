'use strict';

const tvFormElem = document.querySelector('#tvForm');

tvFormElem.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const input = tvFormElem.querySelector('input[name=q]').value;
  const url = `https://api.tvmaze.com/search/shows?q=${input}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const res = document.querySelector('#results');
    res.innerHTML = ``;

    if (data.length === 0) {
      res.innerHTML = `<p>No results found.</p>`;
    }

    for (let element of data) {
      const s = element.show;
      const h = document.createElement('h2');
      h.textContent = s.name;

      const a = document.createElement('a');
      a.href = s.url;
      a.innerText = s.url;
      a.target = '_blank';

      const i = document.createElement('img');
      i.src = (s.image && s.image.medium)
          ? s.image.medium
          : 'https://placehold.co/210x295?text=Not%20Found';
      i.alt = s.name;

      const d = document.createElement('div');
      d.innerHTML = s.summary;

      const article = document.createElement('article');
      article.append(h, i, a, d);

      res.append(article);
    }

  } catch (error) {
    console.log(error);
  }
});