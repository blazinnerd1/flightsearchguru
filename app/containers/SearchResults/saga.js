import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GRAPHQL_HOST } from '../../../config';
import {
  EXECUTE_SEARCH
} from './constants';

import {
  changeSearchResults
} from './actions';

import { changeFilterOptions } from 'containers/FlightFilter/actions'

import { makeSelectSearchOptions } from 'containers/SearchBar/selectors'

import request from 'utils/request';
import { buildSearchQuery } from './buildSearchQuery';

// worker saga
export function* fetchFlights() {
  // CLEAR OLD FLIGHTS
  yield put({ type: FLIGHTS_ARE_LOADING, loading:true });
  yield put({ type: SEARCH_RESULT_ERROR, error:false});
  yield put(changeSearchResults([]));
  yield put(changeFilterOptions());

  try {
    const searchOptions = yield select(makeSelectSearchOptions());
    console.log(searchOptions);

    const graphqlquery = buildSearchQuery(searchOptions);

    const host = GRAPHQL_HOST;

    const requestURL = `${host}?query=${graphqlquery}`;

    const flightSearchData = yield call(request, requestURL);

    const searchResults = flightSearchData.data.flightSearch;
   
    searchResults.forEach(flight => {
      flight.stops = JSON.parse(flight.stops);
      flight.carriers = JSON.parse(flight.carriers);
    });

    yield put(changeSearchResults(searchResults));
    yield put({ type: FILTER_SEARCH_RESULTS });

  } catch (err) {
    console.log('err', err);
    // yield?
    yield put({ type: HAS_ERROR_TRUE });
    yield put({ type: FLIGHTS_ARE_LOADING_FALSE });
  }
}

// watcher saga
export default function* searchFlightWatcher() {
  yield takeLatest(EXECUTE_SEARCH, fetchFlights),
}
