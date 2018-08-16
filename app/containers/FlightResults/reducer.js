/*
 *
 * FlightResults reducer
 *
 */

import { fromJS } from 'immutable';
import { DISPLAY_NEW_FLIGHTS } from './constants';

export const initialState = fromJS({
  filteredFlights:[],
});

function flightResultsReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NEW_FLIGHTS:
      return state.set('filteredFlights', action.newFlights);
    default:
      return state;
  }
}

export default flightResultsReducer;
