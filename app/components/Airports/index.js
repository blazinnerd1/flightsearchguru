/**
 *
 * Airport
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { countries, cities, airports } from '../../../data/data';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Airports extends React.Component {
  render() {
    console.log(this.props);
    const from_airport = airports.find(
      airport => airport.id === this.props.from_id,
    );
    const to_airport = airports.find(
      airport => airport.id === this.props.to_id,
    );
    console.log(from_airport, to_airport);
    const from_city = from_airport.city_name;
    const to_city = to_airport.city_name;
    return (
      <div
        style={{
          display: 'inline-block',
          padding: '2px',
          verticalAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', padding: '1px' }}>{from_city}</div>
        <div style={{ fontWeight: 'bold', padding: '1px' }}>{to_city}</div>
        <div style={{ padding: '1px' }}>
          <span>{this.props.from_id}</span>-
          <span>{this.props.to_id}</span>
        </div>
      </div>
    );
  }
}

Airports.propTypes = {
  from_id: PropTypes.string.isRequired,
  to_id: PropTypes.string.isRequired,
};

export default Airports;
