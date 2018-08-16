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
  UPDATE_SEARCH_PARAMS,
  SEARCH_FLIGHTS,
  SEARCH_FLIGHTS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  flightResults: [],
  searchParams: {
    departingAirport: '',
    destination: '',
    dates: [],
  },
});

function searchBar2Reducer(state = initialState, action) {
  console.log('searchBar2Reducer fired');
  console.log('searchBar2Reducer state: ', state);
  console.log('searchBar2Reducer action: ', action);
  switch (action.type) {
    case UPDATE_SEARCH_PARAMS:
      return state.set('searchParams', action.searchParams);
    case SEARCH_FLIGHTS:
      return state.set('searchFlights', action.searchFlights);
    case SEARCH_FLIGHTS_SUCCESS:
      return state.set('flightResults', action.flightResults);
    default:
      return state;
  }
}

export default searchBar2Reducer;
