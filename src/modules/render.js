const itemContainer = document.getElementById('item-container');

const Render = (movie) => {
  const container = document.createElement('li');
  container.className = 'item';
  container.innerHTML = `<img src="${movie.show.image.original}" alt=""/>
  <div class="item-header-container">
  <h2 class="name">${movie.show.name}</h2>
  <p class="like">5 likes</p>
  </div>`;
  const button = document.createElement('button');
  button.className = 'openModal';
  button.type = 'button';
  button.textContent = 'Comments';

  const reservBtn = document.createElement('button');
  reservBtn.textContent = 'Reservations';

  container.appendChild(button);
  container.appendChild(reservBtn);
  itemContainer.appendChild(container);
};

export default Render;