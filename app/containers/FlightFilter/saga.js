/**
 * Gets the geodata from our site
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { UPDATE_FILTER } from './constants';
import { updateFilter } from './actions';
import { makeSelectFilters } from './selectors'
import { displayNewFlights } from 'containers/FlightResults/actions'
import { makeSelectSearchFlightResults } from 'containers/SearchBar2/selectors'
import request from 'utils/request';

/**
 * filter request handler
 */
export function* filterFlights() {
  // Select username from store
  const searchResults = yield select(makeSelectSearchFlightResults());

  const { maxStops,
    priceLow,
    priceHigh,
    sortBy,
    destinations } = yield select(makeSelectFilters())
    
    
    let filteredFlights = searchResults.filter((flight)=>{

      return flight.price >= priceLow && 
      (priceHigh === 0 || flight.price <= priceHigh) &&
      destinations.includes(flight.to_id) && 
      flight.stops.length<=maxStops;

    })

  yield put(displayNewFlights(filteredFlights));
  
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* filterReset() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(UPDATE_FILTER, filterFlights;
}
