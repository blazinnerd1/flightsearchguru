import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GRAPHQL_HOST } from '../../../config';
import { EXECUTE_SEARCH } from './constants';

import { changeSearchResults } from './actions';
import { changeFilterOptions } from 'containers/FlightFilter/actions';
import { FLIGHTS_ARE_LOADING, SEARCH_RESULT_ERROR } from './constants';
import { FILTER_SEARCH_RESULTS } from 'containers/FlightFilter/constants';
// import { makeSelectSearchOptions } from 'containers/SearchBar/selectors';

import request from 'utils/request';
import { buildSearchQuery } from 'containers/SearchBar/buildSearchQuery';

// worker saga
export function* fetchFlights({ searchOptions }) {
  // CLEAR OLD FLIGHTS
  console.log('inside the saga');
  yield put({ type: FLIGHTS_ARE_LOADING, loading: true });
  yield put({ type: SEARCH_RESULT_ERROR, error: false });
  yield put(changeSearchResults([]));
  yield put(changeFilterOptions());

  try {
    const graphqlquery = buildSearchQuery(searchOptions);

    const host = GRAPHQL_HOST;

    const requestURL = `${host}?query=${graphqlquery}`;

    const { data } = yield call(request, requestURL);

    const { flightSearch } = data;

    flightSearch.forEach(flight => {
      flight.stops = JSON.parse(flight.stops);
      flight.carriers = JSON.parse(flight.carriers);
    });
    console.log('query results', flightSearch);
    yield put(changeSearchResults(flightSearch));
    yield put({ type: FILTER_SEARCH_RESULTS });
  } catch (err) {
    console.log('err', err);
    // yield?
    yield put({ type: FLIGHTS_ARE_LOADING, loading: false });
    yield put({ type: SEARCH_RESULT_ERROR, error: true });
  }
}

// watcher saga
export default function* flightsWatcher() {
  yield takeLatest(EXECUTE_SEARCH, fetchFlights);
}
