import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the filterDestinationsMenuDropdown state domain
 */

const selectFilterDestinationsMenuDropdownDomain = state =>
  state.get('filterDestinationsMenuDropdown', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FilterDestinationsMenuDropdown
 */

const makeSelectFilterDestinationsMenuDropdown = () =>
  createSelector(selectFilterDestinationsMenuDropdownDomain, substate =>
    substate.toJS(),
  );

export default makeSelectFilterDestinationsMenuDropdown;
export { selectFilterDestinationsMenuDropdownDomain };
