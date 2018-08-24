import { fromJS } from 'immutable';
import departureTimeContainerReducer from '../reducer';

describe('departureTimeContainerReducer', () => {
  it('returns the initial state', () => {
    expect(departureTimeContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
