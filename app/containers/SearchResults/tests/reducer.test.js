import { fromJS } from 'immutable';
import flightResultsReducer from '../reducer';

describe('flightResultsReducer', () => {
  it('returns the initial state', () => {
    expect(flightResultsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
