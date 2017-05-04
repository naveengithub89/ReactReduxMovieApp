
import { FETCH_IMDB_MOVIE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_IMDB_MOVIE:
      let arr = [];
      arr.push(action.payload.data);
      return arr;

    default:
    return state;
  }
}
