/* eslint-disable import/no-cycle */
import { renderModal, CommentUpdate } from './renderModal.js';
import { GetComments, PostLikes, GetLikes } from './API.js';

const itemContainer = document.getElementById('item-container');

const Render = (movie, likes) => {
  const container = document.createElement('li');
  container.className = 'item column';

  const movieImage = document.createElement('img');
  movieImage.src = `${movie.show.image.original}`;
  movieImage.alt = `${movie.show.name}`;

  const headerContainer = document.createElement('div');
  headerContainer.className = 'item-header-container';

  const imageHeader = document.createElement('h4');
  imageHeader.className = 'name';
  imageHeader.innerHTML = `${movie.show.name}`;

  const likeContainer = document.createElement('div');
  likeContainer.className = 'like-container';

  const likesP = document.createElement('p');
  likesP.className = 'like';
  likesP.innerHTML = `${likes.likes} likes`;

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.id = `${movie.show.id}`;
  likeBtn.innerHTML = '<img src="https://tse4.mm.bing.net/th?id=OIP.e6IckBEOEHuCKMW8DEQfEgHaGa&pid=Api&P=0&w=189&h=164" class="like-btn" alt="like">';

  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';

  const button = document.createElement('button');
  button.className = 'openModal open-modal btn btn-secondary';
  button.type = 'button';
  button.textContent = 'Comments';

  headerContainer.appendChild(imageHeader);
  headerContainer.appendChild(likeContainer);

  likeContainer.appendChild(likeBtn);
  likeContainer.appendChild(likesP);

  btnContainer.appendChild(button);

  container.appendChild(movieImage);
  container.appendChild(headerContainer);
  container.appendChild(btnContainer);
  itemContainer.appendChild(container);

  likeBtn.addEventListener('click', () => {
    const movieid = `${movie.show.id}`;
    const id = parseInt(movieid, 10);

    likeBtn.disabled = 'true';

    PostLikes(id);

    const body = {
      item_id: (id),
    };
    GetLikes(body);
    likesP.innerHTML = `${likes.likes + 1} likes`;
  });

  button.addEventListener('click', async () => {
    renderModal(movie);
    const commentArray = await GetComments(movie.show.id);
    CommentUpdate(commentArray);
  });
};

export default Render;