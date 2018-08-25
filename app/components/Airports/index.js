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
    const to_airport = airports.find(
      airport => airport.id === this.props.to_id,
    );
    const to_city = cities.find(city => city.airport === this.props.to_id);
    const to_country = countries.find(
      country => country.id === to_city.id_countries,
    );
    return (
      <div
        style={{
          display: 'inline-block',
          padding: '2px',
          verticalAlign: 'center',
          margin: 'auto',
        }}
      >
        <div style={{ fontWeight: 'bold', padding: '1px' }}>{to_city.name}</div>
        <div style={{ padding: '1px', fontSize: '.8em' }}>
          {to_country.name}
        </div>
        <div
          style={{ padding: '1px', fontWeight: 'lighter', fontSize: '.6em' }}
        >
          {to_airport.name}
        </div>
        <div />
      </div>
    );
  }
}

Airports.propTypes = {
  from_id: PropTypes.string.isRequired,
  to_id: PropTypes.string.isRequired,
};

export default Airports;
