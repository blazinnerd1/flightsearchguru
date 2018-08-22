/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { SAVE_USER_INFO } from './constants';

// The initial state of the App
const initialState = fromJS({
  user: false,
  session_id: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_INFO:
      return state
        .set('user', action.user)
        .set('session_id', action.session_id);
    default:
      return state;
  }
}

export default loginReducer;
