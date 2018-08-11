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
  metaflightchoice: typeOptions[0].value,
  metadest: destOptions[0].value,
  metadeparting: timeOptions[1].value,
  metalength: lengthOptions[0].value,
  metaending: timeOptions[1].value,
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_METAFLIGHTCHOICE:
      return state.set('metaflightchoice', action.metaflightchoice);
    case CHANGE_METADEST:
      return state.set('metadest', action.metadest);
    case CHANGE_METADEPARTING:
      return state.set('metadeparting', action.metadeparting);
    case CHANGE_METALENGTH:
      return state.set('metalength', action.metalength);
    case CHANGE_METAENDING:
      return state.set('metaending', action.metaending);
    default:
      return state;
  }
}

export default searchBarReducer;
