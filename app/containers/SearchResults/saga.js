import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GRAPHQL_HOST } from '../../../config';
import {
  EXECUTE_SEARCH,
  CHANGE_SEARCH_RESULTS,
  FLIGHTS_ARE_LOADING,
  SEARCH_RESULT_ERROR,
} from './constants';
import { changeSearchResults } from './actions';
import { changeFilterOptions } from 'containers/FlightFilter/actions';
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
  console.log('erasing old serach results');
  yield put(changeSearchResults([]));
  console.log('done erasing');
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
    const fuckMe = changeSearchResults(flightSearch);
    console.log(fuckMe);
    yield put(fuckMe);
    // yield put({ type: CHANGE_SEARCH_RESULTS, flightSearch });
    console.log('search results saved');
    yield put({ type: FILTER_SEARCH_RESULTS });
    console.log('done filtering');
  } catch (err) {
    console.log('err', err);
    // yield?
    yield put({ type: FLIGHTS_ARE_LOADING, loading: false });
    yield put({ type: SEARCH_RESULT_ERROR, error: true });
  }
}

// watcher saga
export default function* flightsSagaWatcher() {
  yield takeLatest(EXECUTE_SEARCH, fetchFlights);
}
