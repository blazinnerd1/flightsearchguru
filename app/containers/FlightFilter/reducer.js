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

import { CHANGE_FILTER_OPTIONS, CHANGE_FILTERED_FLIGHTS } from './constants';

const defaultFilterOptions = {
  maxStops: 10,
  highestPrice: 0,
  sortBy: 'cheapest', // can be cheapest or date
  excludeDestinations: [],
};

// The initial state of the App
export const initialState = fromJS({
  filters: { ...defaultFilterOptions },
  filteredFlights: [],
});

function filterReducer(state = initialState, action) {
  const newFilterOptions = action.newFilterOptions || defaultFilterOptions;
  console.log('action', action);
  switch (action.type) {
    case CHANGE_FILTER_OPTIONS:
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

export default filterReducer;
