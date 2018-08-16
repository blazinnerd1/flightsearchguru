/*
 *
 * FlightFilter actions
 *
 */

import { RESET_FILTER, UPDATE_FILTER } from './constants';

export function resetFilter() {
  return { type: RESET_FILTER };
}

export function updateFilter() {
  return { type: UPDATE_FILTER };
}
