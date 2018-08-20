/*
 * HomeReducer
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
  LOAD_GEODATA,
  LOAD_GEODATA_SUCCESS,
  LOAD_GEODATA_ERROR,
} from './constants';

// The initial state of the App
// The initial state of the App
export const initialState = fromJS({
  geodataLoaded: false,
  geodataError: false,
  geodata: {
    regions: [],
    cities: [],
    countries: [],
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GEODATA:
      return state
        .set('geodataLoaded', true)
        .set('geodataError', false)
        .setIn(['geodata', 'regions'], [])
        .setIn(['geodata', 'cities'], [])
        .setIn(['geodata', 'countries'], []);
    case LOAD_GEODATA_SUCCESS:
      return state
        .setIn(['geodata', 'regions'], action.geodata.regions)
        .setIn(['geodata', 'cities'], action.geodata.cities)
        .setIn(['geodata', 'countries'], action.geodata.countries)
        .set('geodataLoaded', true);
    case LOAD_GEODATA_ERROR:
      return state
        .set('geodataError', action.error)
        .set('geodataLoaded', false);
    default:
      return state;
  }
}

export default homeReducer;
