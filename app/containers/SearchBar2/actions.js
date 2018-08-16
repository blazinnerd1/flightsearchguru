/*
 *
 * SearchBar2 actions
 *
  * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  UPDATE_SEARCH_PARAMS,
  SEARCH_FLIGHTS,
  SEARCH_FLIGHTS_SUCCESS,
} from './constants';

export function updateSearchParams(searchParams) {
  console.log(' update params ', searchParams)

  return { type: UPDATE_SEARCH_PARAMS, searchParams: searchParams.value };
}

export function searchFlights(searchParameters) {
  console.log('search flights: ', searchParameters)

  return { type: SEARCH_FLIGHTS, searchParameters: searchParameters.value };
}

export function searchFlightsSuccess(searchResults) {
  console.log('search results: ', searchResults)
  return { type: SEARCH_FLIGHTS_SUCCESS, searchResults: searchResults.value };
}
