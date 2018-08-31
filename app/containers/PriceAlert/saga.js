import { takeLatest, call, put, select } from 'redux-saga/effects';

import { CREATE_PRICE_ALERT, FETCH_PRICE_ALERTS } from './constants';
import request from 'utils/request';
import { PRICE_ALERT_HOST, PRICE_ALERT_X_API_KEY } from '../../../config';
import { makeSelectSearchParams } from '../SearchResults/selectors';

// Individual exports for testing

export function* createPriceAlert(priceAlertObj) {
  const { user_id, title, flight_type, departing, destinations, dates, target_price } = priceAlertObj.priceAlert;

  try {
    console.log('Price alert api call fired');

    const response = yield call(request, PRICE_ALERT_HOST, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'x-api-key': PRICE_ALERT_X_API_KEY,
      },
      body: JSON.stringify({
        user_id,
        title,
        flight_type,
        departing, 
        destinations, 
        dates,
        target_price,
        completed: 0,
      })
    });

    console.log('priceAlertLambda response: ', response);
    alert('Price Alert Created');

    // yield put(storePriceAlerts({ priceAlerts })); // UNCOMMENT AFTER IMPLEMENTING
  } catch (err) {
    console.log('priceAlertLambda returned error: ');
    console.log(err);
  }
}


export function* fetchPriceAlerts() {
  // FILL_ME_IN
}


export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield [
    takeLatest(CREATE_PRICE_ALERT, createPriceAlert),
    takeLatest(FETCH_PRICE_ALERTS, fetchPriceAlerts),
  ];
}
