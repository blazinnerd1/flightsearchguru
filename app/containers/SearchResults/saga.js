import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GRAPHQL_HOST } from '../../../config';
import { EXECUTE_SEARCH } from './constants';

import { changeSearchResults, changeSearchLoading } from './actions';

import {
  changeFilterOptions,
  changeFilteredFlights,
} from 'containers/FlightFilter/actions';
import { FLIGHTS_ARE_LOADING, SEARCH_RESULT_ERROR } from './constants';
import { FILTER_SEARCH_RESULTS } from 'containers/FlightFilter/constants';
// import { makeSelectSearchOptions } from 'containers/SearchBar/selectors';

import request from 'utils/request';
import { buildSearchQuery } from 'containers/SearchBar/buildSearchQuery';

import { makeSelectFilters } from 'containers/FlightFilter/selectors';

import { makeSelectSearchResults } from './selectors';

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

export function* filterFlights() {
  console.log('firing filter');
  yield put(changeSearchLoading(true));
  const searchResults = yield select(makeSelectSearchResults());
  console.log('in filter', searchResults);
  const filters = yield select(makeSelectFilters());
  console.log('filters', filters);
  const {
    maxStops,
    highestPrice,
    sortBy,
    excludeDestinations,
  } = filters.toObject();
  console.log(filters.toObject());
  let filteredFlights = searchResults;
  console.log(filteredFlights);
  if (highestPrice > 0) {
    filteredFlights = filteredFlights.filter(
      flight => flight.price <= highestPrice,
    );
  }

  filteredFlights = filteredFlights.filter(
    flight => !excludeDestinations.includes(flight.to_id),
  );

  if (maxStops >= 1) {
    filteredFlights = filteredFlights.filter(
      flight => flight.stops.length <= maxStops,
    );
  }

  if (sortBy === 'cheapest') {
    filteredFlights.sort((a, b) => a.price - b.price);
  } else {
    filteredFlights.sort(
      (a, b) => new Date(a.departing) - new Date(b.departing),
    );
  }
  console.log('saving filtered', filteredFlights);
  yield put(changeFilteredFlights(filteredFlights));
  yield put(changeSearchLoading(false));
}

// watcher saga
export default function* flightsWatcher() {
  yield [
    takeLatest(EXECUTE_SEARCH, fetchFlights),
    takeLatest(FILTER_SEARCH_RESULTS, filterFlights),
    ,
  ];
}
