/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRegions = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['geodata', 'regions']),
  );

const makeSelectCities = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['geodata', 'cities']),
  );

const makeSelectCountries = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['geodata', 'countries']),
  );

const makeSelectGeodata = () =>
  createSelector(selectGlobal, globalState => globalState.get('geodata'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectRegions,
  makeSelectAirports,
  makeSelectCountries,
  makeSelectCities,
  makeSelectLocation,
};
