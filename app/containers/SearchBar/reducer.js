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

import { CHANGE_SEARCH_PARAMETERS } from './constants';

// The initial state of the App
export const initialState = fromJS({
  searchParams: {
    departingAirport: '',
    destinations: [],
    dates: [],
  },
});

function searchBarReducer(state = initialState, action) {
  const { departingAirport, destinations, dates } = action;
  switch (action.type) {
    case CHANGE_SEARCH_PARAMETERS:
      return state
        .setIn(['searchParams', 'departingAirport'], departingAirport)
        .setIn(['searchParams', 'destinations'], destinations)
        .setIn(['searchParams', 'dates'], dates);
    default:
      return state;
  }
}

export default searchBarReducer;
