/**
 * Gets the geodata from our site
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGOUT, VERIFY_USER, SAVE_USER_INFO } from './constants';
import {} from './actions';
import request from 'utils/request';

// import from data file method
export function* loginUser(user) {}

export function* logoutUser() {}

export function* verifyUser() {}
/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
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
