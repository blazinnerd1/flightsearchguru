/*
 *
 * Search Results reducer
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
  SAVE_CHANGED_FILTER_OPTIONS,
  CHANGE_FILTERED_FLIGHTS,
} from './constants';

const defaultFilterOptions = {
  maxStops: 10,
  highestPrice: 0,
  sortBy: 'cheapest', // can be cheapest or date
  excludeDestinations: [],
};

// The initial state of the App
export const initialState = fromJS({
  searchResults: false,
  loading: false,
  hasError: false,
  view: 'list', // can be list, map, graph
  filters: { ...defaultFilterOptions },
  filteredFlights: false,
});

function searchResultsReducer(state = initialState, action) {
  const newFilterOptions = action.newFilterOptions || defaultFilterOptions;
  switch (action.type) {
    case SEARCH_RESULT_ERROR:
      return state.set('hasError', action.hasError);
    case FLIGHTS_ARE_LOADING:
      return state.set('loading', action.loading);
    case CHANGE_SEARCH_RESULTS:
      return state.set('searchResults', action.searchResults);
    case CHANGE_VIEW:
      return state.set('view', action.view);
    case SAVE_CHANGED_FILTER_OPTIONS:
      return state
        .setIn(['filters', 'maxStops'], newFilterOptions.maxStops)
        .setIn(['filters', 'highestPrice'], newFilterOptions.highestPrice)
        .setIn(['filters', 'sortBy'], newFilterOptions.sortBy) // can be cheapest or date
        .setIn(
          ['filters', 'excludeDestinations'],
          newFilterOptions.excludeDestinations,
        );
    case CHANGE_FILTERED_FLIGHTS:
      return state.set('filteredFlights', action.filteredFlights);
    default:
      return state;
  }
}

export default searchResultsReducer;
