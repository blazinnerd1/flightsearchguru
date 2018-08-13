/**
 * Gets the geodata from our site
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_GEODATA } from 'containers/HomePage/constants';
import { geodataLoaded, geodataError } from 'containers/HomePage/actions';
import request from 'utils/request';

const graphqlquery = `
{
  regions {
    id
    name
  }
  countries {
    id
    name
    region {
      id
      name
    }
  }
  cities{
    name
    country{
      name
    }
  }
  airports{
    name
    city_name
  }
}
`;

/**
 * Geodata request/response handler
 */
export function* getGeodata() {
  // Select username from store
  // const geo = yield select(makeSelectGeodata());
  const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;
  try {
    // Call our request helper (see 'utils/request')
    const geodata = yield call(request, requestURL);
    console.log(geodata);
    yield put(geodataLoaded(geodata.data));
  } catch (err) {
    console.log('err', err);
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
