/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AirplaneIcon from '../AirplaneIcon';
import {airport_code_dict} from '../../../data/airport_code_dict'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { airlines } from '../../../data/data';

/* eslint-disable react/prefer-stateless-function */

// helper function, given a list of carriers returns the most prominant carrier
// if no carrier is most prominant (ie two carriers each with one leg), returns an empty string

class Logo extends React.Component {
  render() {
    const { from_id, to_id, logoUrl, carrier, onlyOneCarrier } = this.props;
    const fromAirport = airport_code_dict[from_id];
    const toAirport = airport_code_dict[to_id];

    const fromTooltip = fromAirport && fromAirport.name ? fromAirport.name : '';
    const toTooltip = toAirport && toAirport.name ? toAirport.name : '';

    let logoComp = <AirplaneIcon />;
    if (logoUrl !== 'none') {
      logoComp = (
        <img
          src={logoUrl}
          style={{ maxWidth: '60px' }}
          alt={airlines[carrier]}
          title={airlines[carrier]}
        />
      );
    } else if (!onlyOneCarrier) {
      logoComp = (
        // TO DO i18n this message  
        <span title="Multiple Carriers">
          <AirplaneIcon />
        </span>
      );
    }

    return (
      <div style={{ margin: '10px' }}>
        {logoComp}
        <div
          style={{
            padding: '1px',
            fontSize: '.7em',
            marginTop: '2px',
            fontWeight: 'lighter',
          }}
        >
          <span title={fromTooltip}>{from_id}</span>-
          <span title={toTooltip}>{to_id}</span>
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  carriers: PropTypes.array,
  stops: PropTypes.array,
  departing: PropTypes.string,
  arrivetime: PropTypes.string,
};

export default Logo;
