import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchBar2 = state => state.get('searchBar2', initialState);

// const makeSelectSearchBar2 = () =>
//   createSelector(selectSearchBar2Domain, substate => substate.toJS());
// HOW IS THIS DIFFERNT

const makeSelectDepartingAirport = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('departingAirport'),
  );

const makeSelectDestination = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('destination'),
  );

const makeSelectDestinationType = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('destinationType'),
  );

const makeSelectStartDate = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('startDate'),
  );

const makeSelectEndDate = () =>
  createSelector(selectSearchBar2, searchbarState2 =>
    searchbarState2.get('endDate'),
  );

export {
  selectSearchBar2,
  makeSelectDepartingAirport,
  makeSelectDestination,
  makeSelectDestinationType,
  makeSelectStartDate,
  makeSelectEndDate,
};

// DEFAULT
// export default makeSelectSearchBar2;
// export { selectSearchBar2Domain };
