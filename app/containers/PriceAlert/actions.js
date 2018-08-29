/*
 *
 * PriceAlert actions
 *
 */

import { CREATE_PRICE_ALERT, FETCH_PRICE_ALERTS } from './constants';

export function storePriceAlerts(priceAlerts) {
  return { type: FETCH_PRICE_ALERT, priceAlerts };
}
