import axios from 'axios';

export const FETCH_MOVIES_SEARCH = 'fetch_movie_search';
export const FETCH_IMDB_MOVIE = 'fetch_imdb_movie';

const ROOT_URL = 'http://omdbapi.com?';

export function fetchMovies(searchStr) {
  
  const request = axios.get(`${ROOT_URL}s=${searchStr}`);
  return {
    type : FETCH_MOVIES_SEARCH,
    payload : request
  };
}

export function fetchIMDBMovie(imdbID) {
  const request = axios.get(`${ROOT_URL}i=${imdbID}`);

  return {
    type : FETCH_IMDB_MOVIE,
    payload : request
  }
}
