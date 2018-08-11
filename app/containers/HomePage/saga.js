/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GEODATA } from 'containers/App/constants';
import { geodataLoaded, geodataError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectGeodata } from 'containers/HomePage/selectors';

/**
 * Geodata request/response handler
 */
export function* getGeodata() {
  // Select username from store
  const geo = yield select(makeSelectGeodata());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const geodata = yield call(request, requestURL);
    yield put(geodataLoaded(geo, geodata));
  } catch (err) {
    yield put(geodataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* geoData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GEODATA, getGeodata);
}
