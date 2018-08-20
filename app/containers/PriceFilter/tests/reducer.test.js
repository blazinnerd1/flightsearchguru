import { fromJS } from 'immutable';
import priceFilterReducer from '../reducer';

describe('priceFilterReducer', () => {
  it('returns the initial state', () => {
    expect(priceFilterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
