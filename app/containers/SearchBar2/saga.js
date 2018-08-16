import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_FLIGHTS, SEARCH_FLIGHTS_SUCCESS } from 'containers/SearchBar2/constants';
import { searchFlights, searchFlightsSuccess } from 'containers/SearchBar2/actions';
import { makeSelectSearchParams } from 'containers/SearchBar2/selectors';
import { makeSelectMetadest } from 'containers/SearchBar/selectors';
import request from 'utils/request';
import { buildSearchQuery } from './buildSearchQuery'

// worker saga
export function* fetchFlights() {
  const metadest = yield select(makeSelectMetadest());
  const searchParams = yield select(makeSelectSearchParams());

  const graphqlquery = buildSearchQuery(metadest, searchParams);
  console.log(graphqlquery);
  const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;

  try {
    const flightSearchData = yield call(request, requestURL);
    console.log('<><><><><><><><><><><><><><><><><><><><><>');
    const flightData = flightSearchData.data;
    console.log(flightData);
    yield put(searchFlightsSuccess({ flightData }));
  } catch (err) {
    console.log('err', err);
    // yield?
  }
}

// watcher saga
export default function* searchFlightWatcher() {
  yield takeLatest(SEARCH_FLIGHTS, fetchFlights);
}
