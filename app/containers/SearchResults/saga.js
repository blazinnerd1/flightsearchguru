import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GRAPHQL_HOST } from '../../../config';
import {
  EXECUTE_SEARCH,
  CHANGE_FILTER_OPTIONS,
  FLIGHTS_ARE_LOADING,
  SEARCH_RESULT_ERROR,
  FILTER_SEARCH_RESULTS,
} from './constants';
import {
  changeSearchResults,
  changeSearchLoading,
  changeFilteredFlights,
  changeFilterOptions,
  saveFilterOptions,
} from './actions';
// import { changeFilterOptions } from 'containers/FlightFilter/actions';

// import { makeSelectSearchOptions } from 'containers/SearchBar/selectors';

import { makeSelectSearchResults, makeSelectFilters } from './selectors';

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
  yield put(saveFilterOptions());

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

export function* filterFlights() {
  console.log('firing filter');
  yield put(changeSearchLoading(true));
  const searchResults = yield select(makeSelectSearchResults());
  console.log('in filter search results', searchResults);
  const filters = yield select(makeSelectFilters());
  console.log('filters', filters);
  const {
    maxStops,
    highestPrice,
    sortBy,
    excludeDestinations,
  } = filters.toObject();
  console.log('filters', filters.toObject());
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
  console.log('saved filtered');
  yield put(changeSearchLoading(false));
}

export function* updateFilter({ newFilterOptions }) {
  console.log('heres the new filters', newFilterOptions);
  yield put(saveFilterOptions(newFilterOptions));
  console.log('done saving new filters, now filtering with them!');
  yield put({ type: FILTER_SEARCH_RESULTS });
}

// watcher saga
export default function* flightsSagaWatcher() {
  yield [
    takeLatest(EXECUTE_SEARCH, fetchFlights),
    takeLatest(CHANGE_FILTER_OPTIONS, updateFilter),
    takeLatest(FILTER_SEARCH_RESULTS, filterFlights),
  ];
}
