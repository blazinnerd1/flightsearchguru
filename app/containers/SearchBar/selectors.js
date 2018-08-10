/**
 * SearchBar selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar = state => state.get('searchbar', initialState);

const makeSelectMetaflightchoice = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metaflightchoice'),
  );

const makeSelectMetadest = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metadest'),
  );

const makeSelectMetadeparting = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metadeparting'),
  );

const makeSelectMetalength = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metalength'),
  );

const makeSelectMetaending = () =>
  createSelector(selectSearchBar, searchbarState =>
    searchbarState.get('metaending'),
  );

export {
  selectSearchBar,
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
};
