/*
 *
 * FlightFilter reducer
 *
 */

import { fromJS } from 'immutable';
import { RESET_FILTER } from './constants';

export const initialState = fromJS({
  filterByPrice: false,
  priceLow: 0,
  priceHigh: 0,
  sortBy: 'cheapest', // can be cheapest or date
  destinations: [],
});

function flightFilterReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_FILTER:
      return state;
    default:
      return state;
  }
}

export default flightFilterReducer;
