import { fromJS } from 'immutable';
import flightFilterReducer from '../reducer';

describe('flightFilterReducer', () => {
  it('returns the initial state', () => {
    expect(flightFilterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
