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
import { SAVE_USER_INFO } from './constants';

// The initial state of the App
const initialState = fromJS({
  user: false,
  session_id: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_INFO:
      return state
        .set('user', action.user)
        .set('session_id', action.session_id);
    default:
      return state;
  }
}

export default appReducer;
