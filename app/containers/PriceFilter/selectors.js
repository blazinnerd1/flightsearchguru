import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the priceFilter state domain
 */

const selectPriceFilterDomain = state => state.get('priceFilter', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PriceFilter
 */

const makeSelectPriceFilter = () =>
  createSelector(selectPriceFilterDomain, substate => substate.toJS());

export default makeSelectPriceFilter;
export { selectPriceFilterDomain };
