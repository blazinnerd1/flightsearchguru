import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_FLIGHTS,
} from 'containers/SearchBar2/constants';
import {
  searchFlights,
  searchFlightsSuccess,
} from 'containers/SearchBar2/actions';
import { resetFilter } from 'containers/FlightFilter/actions';
import { makeSelectSearchParams } from 'containers/SearchBar2/selectors';
import { makeSelectMetadest } from 'containers/SearchBar/selectors';
import request from 'utils/request';
import { buildSearchQuery, returnSearchType } from './buildSearchQuery'

import { BEGIN_FILTERING_FLIGHTS } from 'containers/FlightFilter/constants';
// worker saga
export function* fetchFlights() {
  const metadest = yield select(makeSelectMetadest());
  const searchParams = yield select(makeSelectSearchParams());

  const graphqlquery = buildSearchQuery(metadest, searchParams);
  console.log(graphqlquery);

  // FIX THE CONNECTION ENV VARIABLE ISSUE
  console.log('=========================')
  const host = process.env.REACT_APP_FLIGHTS_DBHOST || 'http://localhost:3000'; // change to use config.js

  const requestURL = `${host}/graphql?query=${graphqlquery}`;
  console.log(requestURL)

  try {
    const flightSearchData = yield call(request, requestURL);
    const searchType = returnSearchType(metadest);
    console.log('<><><><><><><><><><><><><><><><><><><><><>');
    // const searchResults = flightSearchData;

    const searchResults = flightSearchData.data[searchType];
    console.log(searchResults);
    yield put(searchFlightsSuccess(searchResults));
    yield put(resetFilter());
    yield put({type: BEGIN_FILTERING_FLIGHTS});
  } catch (err) {
    console.log('err', err);
    // yield?
  }
}

// watcher saga
export default function* searchFlightWatcher() {
  yield takeLatest(SEARCH_FLIGHTS, fetchFlights);
}
