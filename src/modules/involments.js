const involveApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const createApp = async () => {
  const resp = await fetch(`${involveApiUrl}/apps`, { method: 'POST' });
  const involveApiId = await resp.text();
  if (!localStorage.getItem('involveApiId')) localStorage.setItem('involveApiId', involveApiId);
};

const likeMovie = async (movieID) => {
  const involveApiId = localStorage.getItem('involveApiId');
  const resp = await fetch(`${involveApiUrl}/apps/${involveApiId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieID,
    }),
  });
  const status = await resp.status;
  return status;
};

const getLikes = async () => {
  const involveApiId = localStorage.getItem('involveApiId');
  const resp = await fetch(`${involveApiUrl}/apps/${involveApiId}/likes`);
  let likes = await resp.text();
  if (likes.length === 0) likes = '[]';
  return JSON.parse(`{"likes": ${likes}}`);
};

export { createApp, likeMovie, getLikes };
