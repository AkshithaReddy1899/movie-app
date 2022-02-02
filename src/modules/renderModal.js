import { GetComments } from "./API";

const renderModal = async (movie) => {
  const modalContainer = document.getElementById('modal-container');

  const commentArray = await GetComments(movie.show.id);

  modalContainer.innerHTML = `
      <div class="modal-header">
      <div class="title">${movie.show.name}</div>
      <button class="close-button" id="close">&times;</button>
      </div>
      <div class="modal-body">
      <img src="${movie.show.image.medium}"></img>
      <p>Language: ${movie.show.language}</p>
      <p>Type: ${movie.show.type}</p>
      </div>
      <h3>Comments</h3>
      <ul id="comment-list"><ul>
      `;

      commentArray.forEach(item => {
        const li = document.createElement('li');
        const name = document.createElement('span');

        name.innerHTML = `${item.username} : ${item.comment}`
        li.appendChild(name)

        document.getElementById('comment-list').appendChild(li);
      });

      const li = document.createElement('li');


      const list = document.getElementById('comment-list')
      console.log(list);
      document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal-container').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  });
};

export default renderModal;
