/**
 * SearchBar selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar = state => state.get('searchbar', initialState);

const makeSelectSearchOptions = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('searchOptions'),
  );
export { makeSelectSearchOptions };
