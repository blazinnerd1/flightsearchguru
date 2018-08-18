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
  RESET_FILTER,
  UPDATE_FILTER,
  UPDATE_FILTERED_FLIGHTS,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  searchResults: [],
  searchParams: {
    departingAirport: '',
    destinations: [],
    dates: [],
  },
  shouldRenderResults: false,
  filters: {
    maxStops: 10,
    highestPrice: 0,
    sortBy: 'cheapest', // can be cheapest or date
    excludeDestinations: [],
  },
  filteredFlights: [],
});

function searchBar2Reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_PARAMS:
      return state.set('searchParams', action.searchParams);
    case SEARCH_FLIGHTS:
      return state.set('searchFlights', action.searchFlights);
    case SEARCH_FLIGHTS_SUCCESS:
      return state
        .set('searchResults', action.searchResults)
        .set('shouldRenderResults', true);
    case RESET_FILTER:
      return state
        .setIn(['filters', 'maxStops'], 10)
        .setIn(['filters', 'highestPrice'], 0)
        .setIn(['filters', 'sortBy'], 'cheapest') // can be cheapest or date
        .setIn(['filters', 'excludeDestinations'], []);
    case UPDATE_FILTER:
      return state
        .setIn(['filters', 'maxStops'], action.maxStops)
        .setIn(['filters', 'highestPrice'], action.highestPrice)
        .setIn(['filters', 'sortBy'], action.sortBy) // can be cheapest or date
        .setIn(['filters', 'excludeDestinations'], action.excludeDestinations);
    case UPDATE_FILTERED_FLIGHTS:
      return state.set('filteredFlights', action.filteredFlights);
    default:
      return state;
  }
}

export default searchBar2Reducer;
