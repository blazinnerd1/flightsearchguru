/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectMetaflightchoice = () =>
  createSelector(selectHome, homeState => homeState.get('metaflightchoice'));

const makeSelectMetadest = () =>
  createSelector(selectHome, homeState => homeState.get('metadest'));

const makeSelectMetadeparting = () =>
  createSelector(selectHome, homeState => homeState.get('metadeparting'));

const makeSelectMetalength = () =>
  createSelector(selectHome, homeState => homeState.get('metalength'));

const makeSelectMetaending = () =>
  createSelector(selectHome, homeState => homeState.get('metaending'));

export {
  selectHome,
  makeSelectMetaflightchoice,
  makeSelectMetadest,
  makeSelectMetadeparting,
  makeSelectMetalength,
  makeSelectMetaending,
};
