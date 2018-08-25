  
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  FILTER_SEARCH_RESULTS
} from './constants';

import {
  changeFilteredFlights,
  makeSelectFilters
} from './actions';

import {
  changeSearchError,
  changeSearchLoading
} from 'containers/SearchResults/actions'

import {
  makeSelectSearchResults
} from 'containers/SearchResults/selectors'

export function* filterFlights() {
  console.log('firing filter')
  yield put(changeSearchLoading(true));
  const searchResults = yield select(makeSelectSearchResults());

  const filters = yield select(makeSelectFilters());

  const {
    maxStops,
    highestPrice,
    sortBy,
    excludeDestinations,
  } = filters.toObject();
  console.log(filters.toObject());
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


  if (sortBy === 'cheapest') {
    filteredFlights.sort((a, b) => a.price - b.price);
  } else {
    filteredFlights.sort(
      (a, b) => new Date(a.departing) - new Date(b.departing),
    );
  }

  yield put(changeFilteredFlights(filteredFlights));
  yield put(changeSearchLoading(false));
}

// export function* updateFilter({ newFilterOptions }) {
//   console.log(newFilterOptions);
//   yield put(updateFilterOptions(newFilterOptions));
//   yield put({ type: BEGIN_FILTERING_FLIGHTS });
// }

// watcher saga
export default function* filterSagaWatcher() {
  yield takeLatest(FILTER_SEARCH_RESULTS, filterFlights),
}
