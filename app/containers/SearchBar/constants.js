/*
 * SearchBarConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FLIGHT_TYPE =
  'flightsearchguru/SearchBar/CHANGE_FLIGHT_TYPE';
export const CHANGE_DEPARTURE_TIME_TYPE =
  'flightsearchguru/SearchBar/CHANGE_DEPARTURE_TIME_TYPE';
export const CHANGE_DEPARTURE_TIMES =
  'flightsearchguru/SearchBar/CHANGE_DEPARTURE_TIMES';
export const CHANGE_DEPARTING_AIRPORT =
  'flightsearchguru/SearchBar/CHANGE_DEPARTING_AIRPORT';
export const CHANGE_DESTINATIONS =
  'flightsearchguru/SearchBar/CHANGE_DESTINATIONS';
