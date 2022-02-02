import openModal from './popup.js';

const itemContainer = document.getElementById('item-container');

const Render = (movie, likes) => {
  const container = document.createElement('li');
  container.className = 'item';
  container.innerHTML = `<img src="${movie.show.image.original}" alt=""/>
  <div class="item-header-container">
  <h2 class="name">${movie.show.name}</h2>
  <p class="like">${likes.likes} likes</p>
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

  button.addEventListener('click', () => {
    openModal(movie);
    document.getElementById('modal-container').classList.add('active');
    document.getElementById('overlay').classList.add('active');
  });
};

export default Render;