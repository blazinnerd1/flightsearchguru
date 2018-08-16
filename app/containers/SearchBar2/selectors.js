import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar2 = state => state.get('searchBar2', initialState);

// const makeSelectSearchBar2 = () =>
//   createSelector(selectSearchBar2Domain, substate => substate.toJS());
// HOW IS THIS DIFFERNT

const makeSelectSearchParams = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('searchParams'),
  );

const makeSelectSearchResults = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('searchResults'),
  );

const makeSelectShouldRenderSearchResults = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('shouldRenderResults'),
  );

export {
  selectSearchBar2,
  makeSelectSearchParams,
  makeSelectShouldRenderSearchResults,
  makeSelectSearchResults,
};

// DEFAULT
// export default makeSelectSearchBar2;
// export { selectSearchBar2Domain };
