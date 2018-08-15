/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AirplaneIcon from '../AirplaneIcon'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { airlines } from '../../../data/data';
import { differenceInMinutes, differenceInHours, parse } from 'date-fns';

/* eslint-disable react/prefer-stateless-function */

// helper function, given a list of carriers returns the most prominant carrier
// if no carrier is most prominant (ie two carriers each with one leg), returns an empty string
const getPrimaryCarrier = (carriers) => {
  if (carriers.length === 1) return carriers[0];

  // object with carrier:count 
  let carriersCounts = carriers.reduce((m, x) => { if (!m[x]) { m[x] = 0; } m[x]++; return m }, {})

  // array of carrier occurances
  let counts = Object.values(carriersCounts);

  // count of max segments
  let max = Math.max(...counts);
  // does only one carrier have the max segments
  let isOnlyMax = counts.indexOf(max) === counts.lastIndexOf(max);
  if (!isOnlyMax) {
    return ''; // no carrier is dominant, return nothing
  }
  // return the carrier with the most segments
  return Object.keys(carriersCounts).find(key => carriersCounts[key] === max);

}

const getLogoOf = (carrier) => {
  // if we were given the full carrier name, replace it with the 2-letter carrier code
  // if unable to find carrier, return an empty string
 
  if (carrier.length > 2) {
    carrier = Object.keys(airlines).find(key => airlines[key] === carrier);
    // if the carrier was not in our list, set carrier to ''
    carrier = carrier === undefined ? '' : carrier;
  } else if (carrier !== '') {
    carrier = Object.keys(airlines).includes(carrier) ? carrier : '';
  }

  return carrier === '' ? 'none' : `/images/airlines/${carrier}.png`;
}
class Logo extends React.Component {
  render() {
    let {carriers, stops, departing, arrivetime } = this.props;
    carriers = JSON.parse(carriers);
    stops = JSON.parse(stops);

    let stopString = 'Non-Stop';
    let airportsList = ''
    
    let start = new Date(departing);
    let end = new Date(arrivetime);
    let hours = differenceInHours(end, start)
    let minutes = differenceInMinutes(end, start) - hours*60 - 1;

    minutes = (Math.round(minutes / 15) * 15) % 60;
    minutes = minutes===0? '0'+minutes : minutes.toString();

    let flightTime = `${hours}h ${minutes}m`
    let carrier = getPrimaryCarrier(carriers)
    let logourl = getLogoOf(carrier);


    if (stops.length > 0) {

      stopString = `${stops.length} Stop`;
      airportsList = stops.join(', ');

      if(stops.length>1){
        stopString+='s'
      }
    }

    const logoComp = logourl === 'none' ? (<AirplaneIcon />) : (<img src={logourl} alt={airlines[carrier]} />);
      return (
        <div>
          {logoComp}
          <div>{stopString}</div>
          <div>{airportsList}</div>
          <div>{flightTime} </div>
        </div>)
    
  }
}

Logo.propTypes = {
  carriers: PropTypes.string,
  stops: PropTypes.string,
  departing: PropTypes.string,
  arrivetime: PropTypes.string
};

export default Logo;
