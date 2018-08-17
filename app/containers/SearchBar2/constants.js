/*
 *
 * SearchBar2 constants
 * 
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const UPDATE_SEARCH_PARAMS =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_PARAMS';
export const SEARCH_FLIGHTS = 'flightsearchguru/SearchBar2/SEARCH_FLIGHTS';
export const SEARCH_FLIGHTS_SUCCESS =
  'flightsearchguru/SearchBar2/SEARCH_FLIGHTS_SUCCESS';

export const RESET_FILTER = 'app/FlightFilter/RESET_FILTER';
export const UPDATE_FILTER = 'app/FlightFilter/UPDATE_FILTER';
export const UPDATE_FILTERED_FLIGHTS =
  'app/FlightFilter/UPDATE_FILTERED_FLIGHTS';
export const BEGIN_FILTERING_FLIGHTS =
  'app/FlightFilter/BEGIN_FILTERING_FLIGHTS';
