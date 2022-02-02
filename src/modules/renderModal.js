/* eslint-disable no-undef */
export const getCounts = (arr) => arr.length;

// eslint-disable-next-line no-unused-vars
const incrementCount = (title, commentsInfo) => {
  const value = getCounts(commentsInfo) + 1;
  title.textContent = `Comments (${value})`;
};

const renderModal = async (movie) => {
  const modalContainer = document.getElementById('modal-container');

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
      <h4 class="comments-title my-2">Comments</h4>
          <ul class="comments-list list-group list-unstyled"></ul>
          <h5 class="add-comment my-4">Add a comment</h5>
          <form class="d-flex flex-column align-items-start" action="#">
            <input
                class="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
            /><br />
            <textarea
                class="form-control"
                type="text"
                id="insight"
                name="insight"
                placeholder="Your insights"
                rows="4" 
                cols="50"
            ></textarea><br />
            <input class="btn btn-dark" type="submit" id="submit-btn" value="Comment" />
      `;
  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal-container').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  });

  const name = document.querySelector('#name');
  const insight = document.querySelector('#insight');
  const form = document.querySelector('form');
  const title = document.querySelector('.comments-title');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    postCommentToApi(showId, name.value, insight.value);
    addItemToList(ul, [
      {
        creation_date: '2021-08-04',
        username: name.value,
        comment: insight.value,
      },
    ]);
    name.value = '';
    insight.value = '';
    incrementCount(title, commentsInfo);
  });
};

export default renderModal;
