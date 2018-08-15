import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectFlightResults = state => state.get('flightresults', initialState);

// const makeSelectFlightResults = () =>
//   createSelector(selectFlightResults, selectFlightResults => 
//     selectFlightResults.get('flightResults')
//   );

// export { selectFlightResults, makeSelectFlightResults };

const selectSearchBar2 = state => state.get('searchBar2', initialState);

const makeSelectFlightResults = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('flightResults'),
  );

export { selectSearchBar2, makeSelectFlightResults };
