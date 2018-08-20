import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_FLIGHTS,
  BEGIN_FILTERING_FLIGHTS,
  APPLY_NEW_FILTER,
  FLIGHTS_ARE_LOADING_TRUE,
  FLIGHTS_ARE_LOADING_FALSE,
} from './constants';
import {
  searchFlightsSuccess,
  resetFilter,
  displayNewFlights,
  updateFilterOptions,
} from './actions';
import {
  makeSelectSearchParams,
  makeSelectSearchResults,
  makeSelectFilters,
} from './selectors';
import { makeSelectMetaOptions } from 'containers/SearchBar/selectors';
import request from 'utils/request';
import { buildSearchQuery } from './buildSearchQuery';

export function* filterFlights() {
  yield put({ type: FLIGHTS_ARE_LOADING_TRUE });
  const searchResults = yield select(makeSelectSearchResults());

  const filters = yield select(makeSelectFilters());

  const {
    maxStops,
    highestPrice,
    sortBy,
    excludeDestinations,
  } = filters.toObject();

  let filteredFlights = searchResults;
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

  yield put(displayNewFlights(filteredFlights));

  yield put({ type: FLIGHTS_ARE_LOADING_FALSE });
}

export function* updateFilter({ newFilterOptions }) {
  yield put(updateFilterOptions(newFilterOptions));
  yield put({ type: BEGIN_FILTERING_FLIGHTS });
}

// worker saga
export function* fetchFlights() {
  yield put({ type: FLIGHTS_ARE_LOADING_TRUE });
  yield put(searchFlightsSuccess([]));

  const metaOptions = yield select(makeSelectMetaOptions());
  const destinationType = metaOptions.get('dest');
  const searchParams = yield select(makeSelectSearchParams());
  const graphqlquery = buildSearchQuery(destinationType, searchParams);

  // FIX THE CONNECTION ENV VARIABLE ISSUE
  const host = 'https://graphql-playground-qqppnxjssf.now.sh/'; // change to use config.js

  const requestURL = `${host}/graphql?query=${graphqlquery}`;

  // console.log('requestURL in SearchBar2 saga');
  // console.log(requestURL);

  try {
    const flightSearchData = yield call(request, requestURL);
    const searchResults = flightSearchData.data.flightSearch;
    // console.log('raw search results from graphql call', searchResults);
    searchResults.forEach(flight => {
      flight.stops = JSON.parse(flight.stops);
      flight.carriers = JSON.parse(flight.carriers);
    });
    yield put(searchFlightsSuccess(searchResults));
    yield put(resetFilter());
    yield put({ type: BEGIN_FILTERING_FLIGHTS });
  } catch (err) {
    console.log('err', err);
    // yield?
    yield put({ type: FLIGHTS_ARE_LOADING_FALSE });
  }
}

// watcher saga
export default function* searchFlightWatcher() {
  yield [
    takeLatest(SEARCH_FLIGHTS, fetchFlights),
    takeLatest(APPLY_NEW_FILTER, updateFilter),
    takeLatest(BEGIN_FILTERING_FLIGHTS, filterFlights),
  ];
}
