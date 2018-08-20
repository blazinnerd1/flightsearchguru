/**
 * SearchBar selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar = state => state.get('searchbar', initialState);

const makeSelectMetaOptions = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metaSearchOptions'),
  );

export { makeSelectMetaOptions };
