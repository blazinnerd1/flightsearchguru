import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the priceAlert state domain
 */

const selectPriceAlertDomain = state => state.get('priceAlert', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PriceAlert
 */

const makeSelectPriceAlert = () =>
  createSelector(selectPriceAlertDomain, substate => substate.toJS());

export default makeSelectPriceAlert;
export { selectPriceAlertDomain };
