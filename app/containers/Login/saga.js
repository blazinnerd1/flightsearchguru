import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, VERIFY_USER } from './constants';
import { saveUser } from './actions';
import request from 'utils/request';
import { AUTH_HOST, AUTH_X_API_KEY, VERIFY_HOST } from '../../../config';

// import from data file method
export function* loginUser({ googleResponse }) {
  try {
    console.log('in login saga with', googleResponse);
    const { tokenId } = googleResponse;
    const authResponse = yield call(request, AUTH_HOST, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'x-api-key': AUTH_X_API_KEY,
        Authorization: tokenId,
      },
    });
    console.log(authResponse);
    const { session_id, user } = authResponse;
    yield put(saveUser({ session_id, user }));
    localStorage.setItem('sessionId', session_id);
    console.log('done saving');
  } catch (err) {
    console.log(err);
  }
}

export function* logoutUser() {
  console.log('attempting to logout in saga');
  yield put(saveUser({ user: false, session_id: false }));
}

export function* verifyUser({ session_id }) {
  try {
    console.log('in verify saga with', session_id);
    const authResponse = yield call(request, VERIFY_HOST, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      body: JSON.stringify({ session_id }),
      headers: {
        'x-api-key': AUTH_X_API_KEY,
      },
    });
    console.log('verify response', authResponse);
  } catch (err) {
    console.log(err);
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* authWatchers() {
  // Watches for LOAD_GEODATA actions and calls getGeodata when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield [
    takeLatest(LOGIN, loginUser),
    takeLatest(LOGOUT, logoutUser),
    takeLatest(VERIFY_USER, verifyUser),
  ];
}
