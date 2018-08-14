import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flightFilter state domain
 */

const selectFlightFilterDomain = state =>
  state.get('flightFilter', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FlightFilter
 */

const makeSelectFlightFilter = () =>
  createSelector(selectFlightFilterDomain, substate => substate.toJS());

export default makeSelectFlightFilter;
export { selectFlightFilterDomain };
