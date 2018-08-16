import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flightFilter state domain
 */

const selectFilter = state =>
  state.get('flightFilter', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FlightFilter
 */

const makeSelectFilters = () =>
  createSelector(selectFilter, state => state.get('filters'));

export { makeSelectFilters };
