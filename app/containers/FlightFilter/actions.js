/*
 *
 * FlightFilter actions
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

import { CHANGE_FILTER_OPTIONS, CHANGE_FILTERED_FLIGHTS } from './constants';

export function changeFilterOptions(newFilterOptions) {
  return { type: CHANGE_FILTER_OPTIONS, newFilterOptions };
}

export function changeFilteredFlights(filteredFlights) {
  console.log(filteredFlights, 'in action');
  return { type: CHANGE_FILTERED_FLIGHTS, filteredFlights };
}
