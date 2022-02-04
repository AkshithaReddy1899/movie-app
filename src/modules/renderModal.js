/* eslint-disable import/no-cycle */
import { GetComments, SendComments } from './API.js';

const CommentUpdate = (array) => {
  document.getElementById('comments-counter').innerHTML = `Comments ${array.length}`;
  array.forEach((item) => {
    const li = document.createElement('li');
    const name = document.createElement('span');

    name.innerHTML = `${item.creation_date} ${item.username} : ${item.comment}`;
    li.appendChild(name);

    document.getElementById('comment-list').appendChild(li);
  });

  document.getElementById('modal-container').classList.add('active');
  document.getElementById('overlay').classList.add('active');
};

const renderModal = (movie) => {
  const modalContainer = document.getElementById('modal-container');

  modalContainer.innerHTML = `
      <div class="modal-header">
      <button class="close-button" id="close">&times;</button>
      </div>
      <div class="modal-body">
      <img src="${movie.show.image.medium}" id="modal-img"></img>
      <small class="movie-description">${movie.show.summary}</small>
      <div class="modal-description">
      <p><b>Language</b>: ${movie.show.language}</p>
      <p><b>Type</b>: ${movie.show.type}</p>
      </div>
      <h5 id="comments-counter" class="text-center">Comments</h5>
      <ul id="comment-list"><ul>
      </div>
      <h5 id="comments-counter" class="text-center">Add a comment</h5>
      <p class="error" id="error">Name and comment cannot be empty</p>
      <form id="form">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="type" class="form-control" id="name" required>
  </div>
  <div class="mb-3">
    <label for="comment" class="form-label">Comment</label>
    <input type="text-area" class="form-control" id="comment" required>
  </div>
  <button type="submit" id="submit" class="btn btn-secondary">Submit</button>
</form>`;

  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal-container').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  });

  document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const comment = document.getElementById('comment');
    const error = document.getElementById('error');

    const movieId = parseInt(`${movie.show.id}`, 10);

    if (name.value === ' ' || comment.value === ' ' || name.value === '' || comment.value === '') {
      error.style.display = 'block';
    } else {
      error.style.display = 'none';
      SendComments(movieId, name.value, comment.value).then(() => {
        GetComments(movieId).then((updatedArray) => {
          document.getElementById('comment-list').innerHTML = '';
          CommentUpdate(updatedArray);
          document.getElementById('form').reset();
        });
      });
    }
  });
};

export { renderModal, CommentUpdate };