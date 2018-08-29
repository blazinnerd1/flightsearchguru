import { fromJS } from 'immutable';
import priceAlertReducer from '../reducer';

describe('priceAlertReducer', () => {
  it('returns the initial state', () => {
    expect(priceAlertReducer(undefined, {})).toEqual(fromJS({}));
  });
});
