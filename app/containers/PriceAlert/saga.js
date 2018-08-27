import { takeLatest, call, put, select } from 'redux-saga/effects';

import { CREATE_PRICE_ALERT, FETCH_PRICE_ALERTS } from './constants';
import request from 'utils/request';
import { ALERT_HOST, ALERT_X_API_KEY } from '../../../config';

// Individual exports for testing

export function* createPriceAlert() {
  try {
    // const { tokenId } = googleResponse;
    const response = yield call(request, ALERT_HOST, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'x-api-key': ALERT_X_API_KEY,
        // Authorization: tokenId,
      },
    });

    response.then( (stuff) => { console.log('------------------------------------', stuff) })

    // yield put(storePriceAlerts({ priceAlerts }));
  } catch (err) {
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
