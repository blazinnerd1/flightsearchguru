import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFilter = state => state.get('flightFilter', initialState);

const makeSelectFilters = () =>
  createSelector(selectFilter, state => state.get('filters'));

const makeSelectFilteredFlights = () =>
  createSelector(selectFilter, state => state.get('filteredFlights'));

export { makeSelectFilters, makeSelectFilteredFlights };
