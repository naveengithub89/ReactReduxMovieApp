import { FETCH_MOVIES_SEARCH } from '../actions';


export default function(state = [], action) {
  switch (action.type) {

    case FETCH_MOVIES_SEARCH:
    return action.payload.data.Search;

    default:
    return state;
  }
}
