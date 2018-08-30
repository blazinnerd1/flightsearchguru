import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the explore state domain
 */

const selectExploreDomain = state => state.get('explore', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Explore
 */

const makeSelectExplore = () =>
  createSelector(selectExploreDomain, substate => substate.toJS());

export default makeSelectExplore;
export { selectExploreDomain };
