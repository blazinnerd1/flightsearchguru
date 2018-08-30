/**
 *
 * Airport
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class Airports extends React.Component {
  render() {
    const { country, city, airport } = this.props;
    return (
      <div
        style={{
          display: 'inline-block',
          padding: '2px',
          verticalAlign: 'center',
          margin: 'auto',
        }}
      >
        <div style={{ fontWeight: 'bold', padding: '1px' }}>{city.name}</div>
        <div style={{ padding: '1px', fontSize: '.8em' }}>{country.name}</div>
        <div
          style={{ padding: '1px', fontWeight: 'lighter', fontSize: '.6em' }}
        >
          {airport.name}
        </div>
        <div />
      </div>
    );
  }
}

Airports.propTypes = {
  country: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  airport: PropTypes.object.isRequired,
};

export default Airports;
