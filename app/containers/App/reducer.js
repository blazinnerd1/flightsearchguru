/*
 * AppReducer
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
const initialState = fromJS({
  loading: false,
  error: false,
  user: false,
  geodata: {
    regions: [],
    cities: [],
    countries: [],
    airports: [],
    loaded: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GEODATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['geodata', 'regions'], [])
        .setIn(['geodata', 'cities'], [])
        .setIn(['geodata', 'countries'], [])
        .setIn(['geodata', 'airports'], [])
        .setIn(['geodata', 'loaded'], false);
    case LOAD_GEODATA_SUCCESS:
      return state
        .setIn(['geodata', 'regions'], action.regions)
        .setIn(['geodata', 'cities'], action.cities)
        .setIn(['geodata', 'countries'], action.countries)
        .setIn(['geodata', 'airports'], action.airports)
        .setIn(['geodata', 'loaded'], true)
        .set('loading', false);
    case LOAD_GEODATA_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
