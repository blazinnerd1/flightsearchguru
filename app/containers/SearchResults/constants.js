/*
 *
 * SearchResults constants
 * 
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FLIGHTS_ARE_LOADING = 'app/SearchResults/FLIGHTS_ARE_LOADING';
export const SEARCH_RESULT_ERROR = 'app/SearchResults/SEARCH_RESULT_ERROR';
export const CHANGE_VIEW = 'app/SearchResults/CHANGE_VIEW';
export const CHANGE_SEARCH_RESULTS = 'app/SearchResults/CHANGE_SEARCH_RESULTS';
export const EXECUTE_SEARCH = 'app/SearchResults/EXECUTE_SEARCH';

export const CHANGE_FILTER_OPTIONS = 'app/FlightFilter/CHANGE_FILTER_OPTIONS';

export const FILTER_SEARCH_RESULTS = 'app/FlightFilter/FILTER_SEARCH_RESULTS';

export const CHANGE_FILTERED_FLIGHTS =
  'app/FlightFilter/CHANGE_FILTERED_FLIGHTS';
