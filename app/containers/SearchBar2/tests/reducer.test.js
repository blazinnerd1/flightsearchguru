import { fromJS } from 'immutable';
import searchBar2Reducer from '../reducer';

describe('searchBar2Reducer', () => {
  it('returns the initial state', () => {
    expect(searchBar2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
