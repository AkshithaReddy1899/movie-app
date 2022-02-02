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

const GetDataFromAPI = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=dog');
  const likesArray = await GetLikes();
  const result = await response.json();
  result.forEach((movie) => {
    const movieId = movie.show.id;
    const likes = likesArray.find((item) => item.item_id === movieId) ?? {likes: 0}
    Render(movie, likes);
  });
};

const getComments = async (showId) => {
  const url = `${involveApiUrl}/${involveApiId}/comments?item_id=${showId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};

const postCommentToApi = async (showId, name, insight) => {
  const url = `${involveApiUrl}/${involveApiId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${showId}`,
      username: name,
      comment: insight,
    }),
  });
  return response.json();
};

export {
  GetDataFromAPI, PostLikes, GetLikes, getComments, postCommentToApi,
};