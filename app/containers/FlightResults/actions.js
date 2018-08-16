/*
 *
 * FlightResults actions
 *
 */

import { DISPLAY_NEW_FLIGHTS } from './constants';

export function displayNewFlights(newFlights) {
  return { type: DISPLAY_NEW_FLIGHTS, newFlights };
}
