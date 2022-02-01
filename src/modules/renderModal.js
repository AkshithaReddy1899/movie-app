const renderModal = (movie) => {
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
      `;
  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal-container').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
  });
};

export default renderModal;
