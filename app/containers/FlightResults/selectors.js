import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectFlightResults = state => state.get('flightresults', initialState);

// const makeSelectFlightResults = () =>
//   createSelector(selectFlightResults, selectFlightResults => 
//     selectFlightResults.get('flightResults')
//   );

// export { selectFlightResults, makeSelectFlightResults };

const selectFlightResults = state => state.get('flightResults', initialState);

const makeSelectFilteredFlights = () =>
  createSelector(selectFlightResults, state => state.get('filteredFlights'));

export { selectFlightResults, makeSelectFilteredFlights };
