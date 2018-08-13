/**
 *
 * FlightList
 *
 */

import React from 'react';
import Flight from '../Flight/index';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class FlightList extends React.Component {
  render() {
    console.log(this.props.flights);
    return (
      <div style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
        {this.props.flights.map((flight, key) => <Flight flight={flight} />)}
      </div>
    );
  }
}

FlightList.propTypes = {
  flights: PropTypes.array,
};

export default FlightList;
