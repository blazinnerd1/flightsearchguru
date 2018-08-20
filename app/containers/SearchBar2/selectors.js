import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar2 = state => state.get('searchBar2', initialState);

// const makeSelectSearchBar2 = () =>
//   createSelector(selectSearchBar2Domain, substate => substate.toJS());
// HOW IS THIS DIFFERNT

const makeSelectSearchParams = () =>
  createSelector(selectSearchBar2, state => state.get('searchParams'));

const makeSelectSearchResults = () =>
  createSelector(selectSearchBar2, state => state.get('searchResults'));

const makeSelectShouldRenderSearchResults = () =>
  createSelector(selectSearchBar2, state => state.get('shouldRenderResults'));

const makeSelectIsLoading = () =>
  createSelector(selectSearchBar2, state => state.get('loading'));

const makeSelectFilters = () =>
  createSelector(selectSearchBar2, state => state.get('filters'));

const makeSelectFilteredFlights = () =>
  createSelector(selectSearchBar2, state => state.get('filteredFlights'));

const makeSelectHasError = () => {
  createSelector(selectSearchBar2, state => state.get('hasError'));
};

export {
  selectSearchBar2,
  makeSelectSearchParams,
  makeSelectShouldRenderSearchResults,
  makeSelectSearchResults,
  makeSelectFilters,
  makeSelectFilteredFlights,
  makeSelectIsLoading,
  makeSelectHasError,
};

// DEFAULT
// export default makeSelectSearchBar2;
// export { selectSearchBar2Domain };
