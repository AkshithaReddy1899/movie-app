/* eslint-disable import/no-cycle */
import Render from './render.js';

const involveApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involveApiId = 'r0Jfm9NG0qKGASTjFlWm';

const GetLikes = async () => {
  const response = await fetch(`${involveApiUrl}${involveApiId}/likes`);
  const result = await response.json();
  return result;
};

const PostLikes = async (movieId) => {
  const response = await fetch(`${involveApiUrl}${involveApiId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
    }),
  });
  return response.status;
};

const SendComments = async (movieId, name, comment) => {
  const response = await fetch(`${involveApiUrl}${involveApiId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
      username: name,
      comment: comment
    }),
  });
  console.log(response);
  return response;
};

const GetComments = async (movieId) => {
  const response = await fetch(`${involveApiUrl}${involveApiId}/comments?item_id=${movieId}`);
  const data = await response.json();
  console.log(data)
  return data;
};

const GetDataFromAPI = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=dog');
  const ApiData = await response.json();
  const ApiLikes = await GetLikes();
  ApiData.forEach((movie) => {
    const movieId = movie.show.id;
    const likes = ApiLikes.find((item) => item.item_id === movieId) ?? { likes: 0 };
    Render(movie, likes);
  });
};

export {
  GetDataFromAPI, PostLikes, GetLikes, SendComments, GetComments,
};