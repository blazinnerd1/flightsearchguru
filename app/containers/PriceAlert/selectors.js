import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the priceAlert state domain
 */

const selectPriceAlert = state => state.get('priceAlert', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PriceAlert
 */

const makeSelectPriceAlert = () =>
  createSelector(selectPriceAlert, substate => substate.toJS());

const makeSelectSessionId = () =>
  createSelector(selectPriceAlert, substate => substate.toJS());

const makeSelectUser = () =>
  createSelector(selectPriceAlert, substate => substate.toJS());

export { makeSelectPriceAlert, makeSelectSessionId, makeSelectUser };
