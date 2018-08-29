import { fromJS } from 'immutable';
import filterDestinationsMenuDropdownReducer from '../reducer';

describe('filterDestinationsMenuDropdownReducer', () => {
  it('returns the initial state', () => {
    expect(filterDestinationsMenuDropdownReducer(undefined, {})).toEqual(fromJS({}));
  });
});
