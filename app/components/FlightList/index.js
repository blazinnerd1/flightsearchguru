/**
 *
 * FlightList
 *
 */

import React from 'react';
import Flight from '../Flight/index';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class FlightList extends React.Component {
  
  render() {
  
    if (this.props.flights.length === 0) {
      return <FormattedMessage {...messages.zeroSearchResults} />;
    }


    const displayMoreFlightsButton =
      this.props.totalFlights > this.props.flights.length ? (
        <div onClick={this.props.handleShowMoreFlights}> <FormattedMessage {...messages.showMoreFlights} /></div>
      ) : (
          <div />
        );

    
    return (
        <div
          style={{
            width: '80%',
            minWidth:'400px',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {this.props.flights.map((flight, key) => (
            <Flight key={`flight_${key}`} flight={flight} />
          ))}
        {displayMoreFlightsButton}
        </div>

    );
  }
}

FlightList.propTypes = {
  flights: PropTypes.array,
};

export default FlightList;
