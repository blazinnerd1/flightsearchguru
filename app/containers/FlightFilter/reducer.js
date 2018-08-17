/*
 *
 * FlightFilter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET_FILTER,
  UPDATE_FILTER,
  UPDATE_FILTERED_FLIGHTS,
} from './constants';

export const initialState = fromJS({
  filters: {
    maxStops: 10,
    highestPrice: 0,
    sortBy: 'cheapest', // can be cheapest or date
    excludeDestinations: [],
  },
  filteredFlights: [],
});

function flightFilterReducer(state = initialState, action) {
  switch (action.type) {
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

export default flightFilterReducer;
