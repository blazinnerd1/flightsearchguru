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
  UPDATE_SEARCH_DEPARTING_AIRPORT,
  UPDATE_SEARCH_DESTINATION,
  UPDATE_SEARCH_DESTINATION_TYPE,
  UPDATE_SEARCH_START_DATE,
  UPDATE_SEARCH_END_DATE,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  search: {
    departingAirport: '',
    destination: '', // select by entering
    destinationType: '', // options: ['airport', 'city', 'country', 'region', 'anywhere']
    startDate: '',
    endDate: '',
    // duration: 0, // num days, list explicitly or calculate
  },
});

function searchBar2Reducer(state = initialState, action) {
  console.log('searchBar2Reducer fired');
  console.log('searchBar2Reducer state: ', state);
  console.log('searchBar2Reducer action: ', action);
  switch (action.type) {
    case UPDATE_SEARCH_DEPARTING_AIRPORT:
      return state.set('departingAirport', action.departingAirport);
    case UPDATE_SEARCH_DESTINATION:
      return state.set('destination', action.destination);
    case UPDATE_SEARCH_DESTINATION_TYPE:
      return state.set('destinationType', action.destinationType);
    case UPDATE_SEARCH_START_DATE:
      return state.set('startDate', action.startDate);
    case UPDATE_SEARCH_END_DATE:
      return state.set('endDate', action.endDate);

    default:
      return state;
  }
}

export default searchBar2Reducer;
