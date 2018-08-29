import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the departureTimeContainer state domain
 */

const selectDepartureTimeContainerDomain = state =>
  state.get('departureTimeContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DepartureTimeContainer
 */

const makeSelectDepartureTimeContainer = () =>
  createSelector(selectDepartureTimeContainerDomain, substate =>
    substate.toJS(),
  );

export default makeSelectDepartureTimeContainer;
export { selectDepartureTimeContainerDomain };
