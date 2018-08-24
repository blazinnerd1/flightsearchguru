/*
 *
 * SearchBar2 reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_SEARCH_RESULTS,
  FLIGHTS_ARE_LOADING,
  SEARCH_RESULT_ERROR,
  CHANGE_VIEW,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  searchResults: [],
  loading: false,
  hasError: false,
  view: 'list', // can be list, map, graph
});

function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT_ERROR:
      return state.set('hasError', action.hasError);
    case FLIGHTS_ARE_LOADING:
      return state.set('loading', action.loading);
    case CHANGE_SEARCH_RESULTS:
      return state.set('searchResults', action.searchResults);
    case CHANGE_VIEW:
      return state.set('view', action.view);
    default:
      return state;
  }
}

export default searchResultsReducer;
