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
  UPDATE_SEARCH_DEPARTING_AIRPORT,
  UPDATE_SEARCH_DESTINATION,
  UPDATE_SEARCH_DESTINATION_TYPE,
  UPDATE_SEARCH_START_DATE,
  UPDATE_SEARCH_END_DATE,
} from './constants';

export function updateSearchDepartingAirport(departingAirport) {
  return {
    type: UPDATE_SEARCH_DEPARTING_AIRPORT,
    departingAirport: departingAirport.value,
  };
}
export function updateSearchDestination(destination) {
  return { type: UPDATE_SEARCH_DESTINATION, destination: destination.value };
}
export function updateSearchDestinationType(destinationType) {
  return {
    type: UPDATE_SEARCH_DESTINATION_TYPE,
    destinationType: destinationType.value,
  };
}
export function updateSearchStartDate(startDate) {
  return { type: UPDATE_SEARCH_START_DATE, startDate: startDate.value };
}
export function updateSearchEndDate(endDate) {
  return { type: UPDATE_SEARCH_END_DATE, endDate: endDate.value };
}
