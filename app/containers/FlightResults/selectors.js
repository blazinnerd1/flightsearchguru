import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flightResults state domain
 */

const selectFlightResultsDomain = state =>
  state.get('flightResults', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FlightResults
 */

const makeSelectFlightResults = () =>
  createSelector(selectFlightResultsDomain, substate => substate.toJS());

export default makeSelectFlightResults;
export { selectFlightResultsDomain };
