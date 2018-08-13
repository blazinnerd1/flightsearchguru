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

export const UPDATE_SEARCH_DEPARTING_AIRPORT =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_DEPARTING_AIRPORT';
export const UPDATE_SEARCH_DESTINATION =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_DESTINATION';
export const UPDATE_SEARCH_DESTINATION_TYPE =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_DESTINATION_TYPE';
export const UPDATE_SEARCH_START_DATE =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_START_DATE';
export const UPDATE_SEARCH_END_DATE =
  'flightsearchguru/SearchBar2/UPDATE_SEARCH_END_DATE';
