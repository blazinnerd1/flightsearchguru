import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLogin = state => state.get('login', initialState);

const makeSelectUser = () =>
  createSelector(selectLogin, state => state.get('user'));

const makeSelectSessionId = () =>
  createSelector(selectLogin, state => state.get('session_id'));

export { makeSelectUser, makeSelectSessionId };
