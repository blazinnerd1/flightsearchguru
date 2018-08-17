/**
 * Gets the geodata from our site
 */

import { makeSelectSearchFlightResults } from 'containers/SearchBar2/selectors';
import { put, select, takeLatest } from 'redux-saga/effects';
import { BEGIN_FILTERING_FLIGHTS } from './constants';
import { displayNewFlights } from './actions';
// import { makeSelectFilters } from './selectors';

/**
 * filter request handler
 */
export function* filterFlights() {
  console.log('firing filtering flights')
  const searchResults = yield select(makeSelectSearchFlightResults());

  // const { maxStops,
  //   priceLow,
  //   priceHigh,
  //   sortBy,
  //   destinations } = yield select(makeSelectFilters())

  // let filteredFlights = searchResults.filter((flight)=>{

  //   return flight.price >= priceLow &&
  //   (priceHigh === 0 || flight.price <= priceHigh) &&
  //   destinations.includes(flight.to_id) &&
  //   flight.stops.length<=maxStops;
  // })

  const filteredFlights = searchResults;
  console.log('filteredFlights', searchResults);
  yield put(displayNewFlights(filteredFlights));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* filterSearchResults() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount


  console.log('firing watcher saga')
  yield takeLatest(BEGIN_FILTERING_FLIGHTS, filterFlights);
}
