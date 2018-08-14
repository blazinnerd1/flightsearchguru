import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH_FLIGHTS, SEARCH_FLIGHTS_SUCCESS } from 'containers/SearchBar2/constants';
import { searchFlights, searchFlightsSuccess } from 'containers/SearchBar2/actions';
import request from 'utils/request';

// worker saga
export function* fetchFlights({
  departingAirport,
  destination,
  startDate,
  endDate,
}) {
//   const graphqlquery = `
//   {
//     oneWayFlightsToAirports(
//       from: ${departingAirport}
//       to: ${destination}
//       start: ${startDate}
//       end: ${endDate}
//     ) {
//       id
//       from_id
//       to_id
//       departing
//       price
//       created_at
//     }
//   }
//   `;
//   console.log(graphqlquery);

//   const requestURL = `http://localhost:3000/graphql?query=${graphqlquery}`;
//   console.log(requestURL);

//   try {
//     const flightData = yield call(request, requestURL);
//     console.log('<><><><><><><><><><><><><><><><><><><><><>');
//     console.log(flightData);
//     yield put(searchFlightsSuccess({ flightData }));
//   } catch (err) {
//     console.log('err', err);
//     // yield put(geodataError(err));
//   }
}

// watcher saga
export default function* searchFlightWatcher() {
  // yield takeLatest(SEARCH_FLIGHTS, fetchFlights);
}
