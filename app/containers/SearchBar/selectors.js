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
const makeSelectDestinationOptions = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('destinationOptions'),
  );
const makeSelectDepartingOptions = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('departingOptions'),
  );
export {
  makeSelectSearchOptions,
  makeSelectDestinationOptions,
  makeSelectDepartingOptions,
};
