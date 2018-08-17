/*
 *
 * FlightFilter actions
 *
 */

import {
  RESET_FILTER,
  UPDATE_FILTER,
  UPDATE_FILTERED_FLIGHTS,
} from './constants';

export function resetFilter() {
  return { type: RESET_FILTER };
}

export function updateFilter(newFilterOptions) {
  return { type: UPDATE_FILTER, newFilterOptions };
}

export function displayNewFlights(filteredFlights) {
  return { type: UPDATE_FILTERED_FLIGHTS, filteredFlights };
}
