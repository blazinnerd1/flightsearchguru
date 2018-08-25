import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FILTER_SEARCH_RESULTS } from './constants';
import { changeSearchLoading } from 'containers/SearchResults/actions';

import { changeFilteredFlights, changeFilterOptions } from './actions';

import { makeSelectFilters } from './selectors';

import { makeSelectSearchResults } from 'containers/SearchResults/selectors';

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
  console.log(filters.toObject());
  let filteredFlights = searchResults.toArray();
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

// export function* updateFilter({ newFilterOptions }) {
//   console.log(newFilterOptions);
//   yield put(updateFilterOptions(newFilterOptions));
//   yield put({ type: BEGIN_FILTERING_FLIGHTS });
// }

// watcher saga
export default function* filterSagaWatcher() {
  yield takeLatest(FILTER_SEARCH_RESULTS, filterFlights);
}
