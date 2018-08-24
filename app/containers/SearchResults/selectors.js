import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchResults = state => state.get('searchResults', initialState);

const makeSelectSearchError = () =>
  createSelector(selectSearchResults, searchResultsState =>
    searchResultsState.get('hasError'),
  );

const makeSelectSearchLoading = () =>
  createSelector(selectSearchResults, searchResultsState =>
    searchResultsState.get('loading'),
  );

const makeSelectSearchResults = () =>
  createSelector(selectSearchResults, searchResultsState =>
    searchResultsState.get('searchResults'),
  );

const makeSelectSearchView = () =>
  createSelector(selectSearchResults, searchResultsState =>
    searchResultsState.get('view'),
  );
export {
  makeSelectSearchError,
  makeSelectSearchLoading,
  makeSelectSearchResults,
  makeSelectSearchView,
};
