import { takeLatest, call, put, select } from 'redux-saga/effects';

import { CREATE_PRICE_ALERT, FETCH_PRICE_ALERTS } from './constants';
import request from 'utils/request';
import { PRICE_ALERT_HOST, PRICE_ALERT_X_API_KEY } from '../../../config';

// Individual exports for testing

export function* createPriceAlert() {

  try {
    console.log('price alert api call fired ==========================');

    const response = yield call(request, PRICE_ALERT_HOST, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'x-api-key': PRICE_ALERT_X_API_KEY,
      },
    });

    console.log(')))))))))))))))))))))))))))))', response)


    // yield put(storePriceAlerts({ priceAlerts }));
  } catch (err) {
    console.log('gots an error yo');
    console.log(err);
  }
}


export function* fetchPriceAlerts() {

}


export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield [
    takeLatest(CREATE_PRICE_ALERT, createPriceAlert),
    takeLatest(FETCH_PRICE_ALERTS, fetchPriceAlerts),
  ];
}
