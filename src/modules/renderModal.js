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
      <h3>Comments</h3>
      <ul id="comment-list"><ul>
      </div>
      <form id="comment-form">
        <h2>Add your comment</h2>
          <input type="text" id="name" placeholder="name" required /><br>
          <textarea id="moviecomment" name="moviecomment" required></textarea>
        <div class="button-flex">
            <button type="button" id="add">Add comment</button>
        </div>
    </form>
      `;

  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal-container').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  });
};

export default renderModal;
