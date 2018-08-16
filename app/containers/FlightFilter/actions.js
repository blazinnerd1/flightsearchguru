/*
 *
 * FlightFilter actions
 *
 */

import { RESET_FILTER, UPDATE_FILTER } from './constants';

export function resetFilter(newFilterOptions) {
  return { type: RESET_FILTER, newFilterOptions };
}

export function updateFilter() {
  return { type: UPDATE_FILTER };
}
