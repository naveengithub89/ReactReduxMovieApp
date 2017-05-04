import { combineReducers } from 'redux';
import MovieReducer from './reducer_list_movies_search';
import IndividualMovieReducer from './reducer_imdb_individualMovie';

const rootReducer = combineReducers({
  movieBySearch : MovieReducer,
  movieByIMDB : IndividualMovieReducer
});

export default rootReducer;
