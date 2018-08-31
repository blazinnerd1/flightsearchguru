/*
 * FlightResults Messages
 *
 * This contains all the text for the FlightResults component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  error: {
    id: 'app.containers.FlightResults.error',
    defaultMessage: 'Error! Please try again.',
  },
  noFlightsFound: {
    id: 'app.containers.FlightResults.noFlightsFound',
    defaultMessage: 'No flights found for your search.',
  },
  noFilterMatches: {
    id: 'app.containers.FlightResults.noFilterMatches',
    defaultMessage: 'No flights match your filters.',
  },
});
