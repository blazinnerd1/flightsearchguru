import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_FLIGHTS, BEGIN_FILTERING_FLIGHTS } from './constants';
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
  const searchResults = yield select(makeSelectSearchResults());

  const filters = yield select(makeSelectFilters());

  const {
    maxStops,
    highestPrice,
    sortBy,
    excludeDestinations,
  } = filters.toObject();
  console.log('filters', maxStops, highestPrice, sortBy, excludeDestinations);

  let filteredFlights = searchResults;
  if (highestPrice > 0) {
    filteredFlights = filteredFlights.filter(
      flight => flight.price <= highestPrice,
    );
    console.log('filtered by price', filteredFlights);
  }
  console.log('excluding from ', excludeDestinations);
  filteredFlights = filteredFlights.filter(flight => {
    console.log(flight, !excludeDestinations.includes(flight.to_id));
    return !excludeDestinations.includes(flight.to_id);
  });
  console.log('filtered by destination', filteredFlights);

  filteredFlights = filteredFlights.filter(
    flight => flight.stops.length <= maxStops,
  );
  console.log('filtered by stops', filteredFlights);

  console.log(
    'searched and got',
    searchResults,
    'filtered into',
    filteredFlights,
  );
  yield put(displayNewFlights(filteredFlights));
}

export function* updateFilter(newFilterOptions) {
  yield put(updateFilterOptions(newFilterOptions));

  yield put({ type: BEGIN_FILTERING_FLIGHTS });
}

// worker saga
export function* fetchFlights() {
  const metaOptions = yield select(makeSelectMetaOptions());
  const destinationType = metaOptions.get('dest');
  const searchParams = yield select(makeSelectSearchParams());
  const graphqlquery = buildSearchQuery(destinationType, searchParams);

  // console.log('graphqlquery in SearchBar2 saga', graphqlquery);

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
  }
}

// watcher saga
export default function* searchFlightWatcher() {
  yield [
    takeLatest(SEARCH_FLIGHTS, fetchFlights),
    // takeLatest(APPLY_NEW_FILTER, obj => updateFilter(obj)),
    takeLatest(BEGIN_FILTERING_FLIGHTS, filterFlights),
  ];
}
