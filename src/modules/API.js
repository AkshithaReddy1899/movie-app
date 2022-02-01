import Render from './render.js';

const GetDataFromAPI = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=dog');
  const result = await response.json();
  result.forEach((movie) => {
    Render(movie);
  });
};

export default GetDataFromAPI;