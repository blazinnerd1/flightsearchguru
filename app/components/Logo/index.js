/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AirplaneIcon from '../AirplaneIcon';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { airlines } from '../../../data/data';
import { differenceInMinutes, differenceInHours, parse } from 'date-fns';
import Typography from '@material-ui/core/Typography';

/* eslint-disable react/prefer-stateless-function */

// helper function, given a list of carriers returns the most prominant carrier
// if no carrier is most prominant (ie two carriers each with one leg), returns an empty string

class Logo extends React.Component {
  render() {
    const { from_id, to_id, logoUrl, carrier, onlyOneCarrier } = this.props;
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
        <span title="Multiple Carriers">
          <AirplaneIcon />
        </span>
      );
    }

    return (
      <Typography>
        {logoComp}
        <div
          style={{
            padding: '1px',
            fontSize: '.7em',
            marginTop: '2px',
            fontWeight: 'lighter',
          }}
        >
          <span>{from_id}</span>-
          <span>{to_id}</span>
        </div>
      </Typography>
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

// let stopString = 'Non-Stop';
// let airportsList = ''

// let start = new Date(departing);
// let end = new Date(arrivetime);
// let hours = differenceInHours(end, start)
// let minutes = differenceInMinutes(end, start) - hours*60 - 1;

// minutes = (Math.round(minutes / 15) * 15) % 60;
// minutes = minutes===0? '0'+minutes : minutes.toString();

// let flightTime = `${hours}h ${minutes}m`
// let carrier = getPrimaryCarrier(carriers)
// let logourl = getLogoOf(carrier);

// if (stops.length > 0) {

//   stopString = `${stops.length} Stop`;
//   airportsList = stops.join(', ');

//   if(stops.length>1){
//     stopString+='s'
//   }
// }
