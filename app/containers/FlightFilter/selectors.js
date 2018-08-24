import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFlightFilter = state => state.get('flightFilter', initialState);

const makeSelectFilters = () =>
  createSelector(selectFlightFilter, flightFilterState =>
    flightFilterState.get('filters'),
  );

const makeSelectFilteredFlights = () =>
  createSelector(selectFlightFilter, flightFilterState =>
    flightFilterState.get('filteredFlights'),
  );

export { makeSelectFilters, makeSelectFilteredFlights };
