/*
 * SearchBarReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_FLIGHT_TYPE,
  CHANGE_DEPARTURE_TIME_TYPE,
  CHANGE_DEPARTURE_TIMES,
  CHANGE_DESTINATIONS,
  CHANGE_DEPARTING_AIRPORT,
} from './constants';
import {
  typeOptions,
  timeOptions,
  destinations,
  departureDestinations,
} from './menuOptions';

const startingCity = departureDestinations.find(x => x.airport === 'AUS');

// The initial state of the App
export const initialState = fromJS({
  searchOptions: {
    flightType: typeOptions[0].value,
    departureTimeType: timeOptions[1].value,
    departureTimes: [],
    departingAirport: startingCity,
    destinations: [],
  },
  destinationOptions: destinations,
  departingOptions: departureDestinations,
});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FLIGHT_TYPE:
      return state.setIn(['searchOptions', 'flightType'], action.flightType);
    case CHANGE_DEPARTURE_TIME_TYPE:
      return state.setIn(
        ['searchOptions', 'departureTimeType'],
        action.departureTimeType,
      );
    case CHANGE_DEPARTURE_TIMES:
      return state.setIn(
        ['searchOptions', 'departureTimes'],
        action.departureTimes,
      );
    case CHANGE_DESTINATIONS:
      return state.setIn(
        ['searchOptions', 'destinations'],
        action.destinations,
      );
    case CHANGE_DEPARTING_AIRPORT:
      return state.setIn(
        ['searchOptions', 'departingAirport'],
        action.departingAirport,
      );
    default:
      return state;
  }
}

export default searchBarReducer;
