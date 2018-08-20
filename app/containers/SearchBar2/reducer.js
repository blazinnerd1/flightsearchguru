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
  RESET_FILTER_PARAMS,
  UPDATE_FILTER_PARAMS,
  UPDATE_FILTERED_FLIGHTS,
  FLIGHTS_ARE_LOADING_TRUE,
  FLIGHTS_ARE_LOADING_FALSE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  searchResults: [],
  loading: false,
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
    case FLIGHTS_ARE_LOADING_TRUE:
      return state.set('loading', true);
    case FLIGHTS_ARE_LOADING_FALSE:
      return state.set('loading', false);
    case SEARCH_FLIGHTS:
      return state.set('searchFlights', action.searchFlights);
    case SEARCH_FLIGHTS_SUCCESS:
      return state
        .set('searchResults', action.searchResults)
        .set('shouldRenderResults', true);
    case RESET_FILTER_PARAMS:
      return state
        .setIn(['filters', 'maxStops'], 10)
        .setIn(['filters', 'highestPrice'], 0)
        .setIn(['filters', 'sortBy'], 'cheapest') // can be cheapest or date
        .setIn(['filters', 'excludeDestinations'], []);
    case UPDATE_FILTER_PARAMS:
      const { stops, price, sortBy, excluding } = action.newFilterOptions;
      return state
        .setIn(['filters', 'maxStops'], stops)
        .setIn(['filters', 'highestPrice'], price)
        .setIn(['filters', 'sortBy'], sortBy) // can be cheapest or date
        .setIn(['filters', 'excludeDestinations'], excluding);
    case UPDATE_FILTERED_FLIGHTS:
      return state.set('filteredFlights', action.filteredFlights);
    default:
      return state;
  }
}

export default searchBar2Reducer;
