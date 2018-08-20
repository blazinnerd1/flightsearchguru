/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectGeodata = () =>
  createSelector(selectHome, state => state.get('geodata'));

const makeSelectRegions = () =>
  createSelector(selectHome, state => state.get('geodata').get('regions'));

const makeSelectCities = () =>
  createSelector(selectHome, state => state.get('geodata').get('cities'));

const makeSelectCountries = () =>
  createSelector(selectHome, state => state.get('geodata').get('countries'));

const makeSelectAirports = () =>
  createSelector(selectHome, state => state.get('geodata').get('airports'));

const makeSelectGeodataLoaded = () =>
  createSelector(selectHome, state => state.get('geodataLoaded'));

const makeSelectGeodataError = () =>
  createSelector(selectHome, state => state.get('geodataError'));

export {
  selectHome,
  makeSelectGeodata,
  makeSelectGeodataLoaded,
  makeSelectGeodataError,
  makeSelectRegions,
  makeSelectCities,
  makeSelectCountries,
  makeSelectAirports,
};
