/*
 * SearchBarReducer
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
  CHANGE_METAFLIGHTCHOICE,
  CHANGE_METADEST,
  CHANGE_METADEPARTING,
  CHANGE_METALENGTH,
  CHANGE_METAENDING,
} from './constants';
import {
  typeOptions,
  destOptions,
  timeOptions,
  lengthOptions,
} from './menuOptions';
// The initial state of the App
export const initialState = fromJS({
  metaSearchOptions: {
    flightType: typeOptions[0].value,
    dest: destOptions[0].value,
    departing: timeOptions[1].value,
    length: lengthOptions[0].value,
    ending: timeOptions[1].value,
  },
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_METAFLIGHTCHOICE:
      return state.setIn(
        ['metaSearchOptions', 'flightType'],
        action.flightType,
      );
    case CHANGE_METADEST:
      return state.setIn(['metaSearchOptions', 'dest'], action.dest);
    case CHANGE_METADEPARTING:
      return state.setIn(['metaSearchOptions', 'departing'], action.departing);
    case CHANGE_METALENGTH:
      return state.setIn(['metaSearchOptions', 'length'], action.length);
    case CHANGE_METAENDING:
      return state.setIn(['metaSearchOptions', 'ending'], action.ending);
    default:
      return state;
  }
}

export default searchBarReducer;
