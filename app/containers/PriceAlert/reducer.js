/*
 *
 * PriceAlert reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_PRICE_ALERT, FETCH_PRICE_ALERTS, STORE_PRICE_ALERTS } from './constants';

export const initialState = fromJS({
  priceAlerts: [],
});

function priceAlertReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_PRICE_ALERTS:
      return state
        .set('priceAlerts', action.priceAlerts);
    default:
      return state;
  }
}

export default priceAlertReducer;
