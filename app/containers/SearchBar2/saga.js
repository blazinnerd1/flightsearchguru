import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_FLIGHTS, BEGIN_FILTERING_FLIGHTS } from './constants';
import {
  searchFlightsSuccess,
  resetFilter,
  displayNewFlights,
} from './actions';
import { makeSelectSearchParams, makeSelectSearchResults } from './selectors';
import { makeSelectMetaOptions } from 'containers/SearchBar/selectors';
import request from 'utils/request';
import { buildSearchQuery, returnSearchType } from './buildSearchQuery';

export function* filterFlights() {
  const searchResults = yield select(makeSelectSearchResults());
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
  console.log('searchResults in filter (SearchBar2 saga)', searchResults);
  yield put(displayNewFlights(filteredFlights));
}

// worker saga
export function* fetchFlights() {
  const metaOptions = yield select(makeSelectMetaOptions());
  const destinationType = metaOptions.get('dest');
  const searchParams = yield select(makeSelectSearchParams());
  const graphqlquery = buildSearchQuery(destinationType, searchParams);
   console.log('graphqlquery in SearchBar2 saga', graphqlquery);
  
  // FIX THE CONNECTION ENV VARIABLE ISSUE
  const host = 'http://localhost:3000'; // change to use config.js

  const requestURL = `${host}/graphql?query=${graphqlquery}`;
  
  console.log('requestURL in SearchBar2 saga');
  console.log(requestURL);

  try {
    const flightSearchData = yield call(request, requestURL);
    const searchType = returnSearchType(metadest);
    console.log('raw search results from graphql call', searchResults);
    const searchResults = flightSearchData.data[searchType];
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
    takeLatest(BEGIN_FILTERING_FLIGHTS, filterFlights),
  ];
}
