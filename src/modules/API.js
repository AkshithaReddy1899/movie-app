import { result } from 'lodash';
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

const SendComments = async (name, comment) => {
  console.log('Hi')
  const response = await fetch(`${involveApiUrl}${involveApiId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
      username: name,
      comment: comment
    })
  })
  alert(response)
  return response;
}
/*
const GetComments = async (movieId) => {
  const response = await fetch(`${involveApiUrl}${involveApiId}/comments`)
  const data = response.json()
  
}*/

const GetDataFromAPI = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=dog');
  const likesArray = await GetLikes();
  const result = await response.json();
  return result;
};

const Loop = async () => {
  const ApiData = await GetDataFromAPI();
  const ApiLikes = await GetLikes();
  ApiData.forEach(movie => {
    const movieId = movie.show.id;
    console.log(movieId)
   const likes = ApiLikes.find((item) => item.item_id === movieId) ?? {likes: 0}
    console.log(likes)
    Render(movie, likes)
  });
}

/* console.log(likesArray)
  result.forEach((movie) => {
    const movieId = movie.show.id;
    const likesObject = likesArray.filter((item) => item.item_id === movieId);
    console.log(likesObject)
    console.log(likesObject[0].likes)
    Render(movie);
  });*/

export {
  GetDataFromAPI, PostLikes, GetLikes, SendComments, Loop
};