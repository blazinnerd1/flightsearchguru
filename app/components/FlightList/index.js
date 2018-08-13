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
    return (
      <div
        style={{
          width: '80%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {this.props.flights.map((flight, key) => <Flight flight={flight} index={key}/>)}
      </div>
    );
  }
}

FlightList.propTypes = {
  flights: PropTypes.array,
};

export default FlightList;
