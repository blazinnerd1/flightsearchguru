/*
 *
 * FlightFilter reducer
 *
 */

import { fromJS } from 'immutable';
import { RESET_FILTER } from './constants';

export const initialState = fromJS({
  filters:{
    maxStops: 10, 
    priceLow: 0,
    priceHigh: 0,
    sortBy: 'cheapest', // can be cheapest or date
    destinations: [],
  }
});

function flightFilterReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case RESET_FILTER:
      return state
        .setIn(['filters', 'maxStops'], 10)
        .setIn(['filters', 'priceLow'], 0)
        .setIn(['filters', 'priceHigh'], 0)
        .setIn(['filters', 'sortBy'], 'cheapest') // can be cheapest or date
        .setIn(['filters', 'destinations'], []);
    case UPDATE_FILTER:
      return state
        .setIn(['filters','filterByPrice'], action.maxStops)
        .setIn(['filters','priceLow'], action.priceLow)
        .setIn(['filters','priceHigh'], action.priceHigh)
        .setIn(['filters','sortBy'], action.sortBy) // can be cheapest or date
        .setIn(['filters','destinations'], action.destinations);
    default:
      return state;
  }
}

export default flightFilterReducer;
