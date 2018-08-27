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
  saveFilterOptions,
} from './actions';
import { airlines, cities, countries, airports } from '../../../data/data';
// import { changeFilterOptions } from 'containers/FlightFilter/actions';

// import { makeSelectSearchOptions } from 'containers/SearchBar/selectors';

import { makeSelectSearchResults, makeSelectFilters } from './selectors';

import request from 'utils/request';
import { buildSearchQuery } from 'containers/SearchBar/buildSearchQuery';

const getPrimaryCarrier = carriers => {
  if (carriers.length === 1) return carriers[0];

  // object with carrier:count
  const carriersCounts = carriers.reduce((m, x) => {
    if (!m[x]) {
      m[x] = 0;
    }
    m[x]++;
    return m;
  }, {});

  // array of carrier occurances
  const counts = Object.values(carriersCounts);

  // count of max segments
  const max = Math.max(...counts);
  // does only one carrier have the max segments
  const isOnlyMax = counts.indexOf(max) === counts.lastIndexOf(max);
  if (!isOnlyMax) {
    return carriers[Math.floor(Math.random() * carriers.length)]; // no carrier is dominant, return nothing
  }
  // return the carrier with the most segments
  return Object.keys(carriersCounts).find(key => carriersCounts[key] === max);
};

const getLogoOf = carrier => {
  // if we were given the full carrier name, replace it with the 2-letter carrier code
  // if unable to find carrier, return an empty string

  if (carrier.length > 2) {
    carrier = Object.keys(airlines).find(key => airlines[key] === carrier);
    // if the carrier was not in our list, set carrier to ''
    carrier = carrier === undefined ? '' : carrier;
  } else if (carrier !== '') {
    carrier = Object.keys(airlines).includes(carrier) ? carrier : '';
  }

  return carrier === '' ? 'none' : `/images/airlines/${carrier}.png`;
};

// worker saga
export function* fetchFlights({ searchOptions }) {
  // CLEAR OLD FLIGHTS

  yield put({ type: FLIGHTS_ARE_LOADING, loading: true });
  yield put({ type: SEARCH_RESULT_ERROR, error: false });
  yield put(changeSearchResults([]));
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
      flight.primaryCarrier = getPrimaryCarrier(flight.carriers);
      flight.logoUrl = getLogoOf(flight.primaryCarrier);
      flight.airport = airports.find(airport => airport.id === flight.to_id);
      flight.city = cities.find(city => city.airport === flight.to_id);
      flight.country = countries.find(
        country => country.id === flight.city.id_countries,
      );
      flight.onlyOneCarrier = Array.from(new Set(flight.carriers)).length === 1;
    });

    yield put(changeSearchResults(flightSearch));
    // yield put({ type: CHANGE_SEARCH_RESULTS, flightSearch });
    yield put({ type: FILTER_SEARCH_RESULTS });
  } catch (err) {
    console.log('err', err);
    // yield?
    yield put({ type: FLIGHTS_ARE_LOADING, loading: false });
    yield put({ type: SEARCH_RESULT_ERROR, error: true });
  }
}

export function* filterFlights() {
  yield put(changeSearchLoading(true));
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

  if (sortBy === 'price') {
    filteredFlights.sort((a, b) => a.price - b.price);
  } else {
    filteredFlights.sort(
      (a, b) => new Date(a.departing) - new Date(b.departing),
    );
  }
  yield put(changeFilteredFlights(filteredFlights));
  yield put(changeSearchLoading(false));
}

export function* updateFilter({ newFilterOptions }) {
  yield put(saveFilterOptions(newFilterOptions));
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
