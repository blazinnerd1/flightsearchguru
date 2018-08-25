/*
 *
 * SearchResults actions
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
  CHANGE_SEARCH_RESULTS,
  SEARCH_RESULT_ERROR,
  FLIGHTS_ARE_LOADING,
  CHANGE_VIEW,
} from './constants';

export function changeSearchResults(searchResults) {
  console.log('firing action with', searchResults);
  return { type: CHANGE_SEARCH_RESULTS, searchResults };
}

export function changeSearchError(error) {
  return { type: SEARCH_RESULT_ERROR, error };
}

export function changeSearchLoading(loading) {
  return { type: FLIGHTS_ARE_LOADING, loading };
}
export function changeView(view) {
  return { type: CHANGE_VIEW, view };
}
